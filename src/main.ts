import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  Component,
  mount,
  component,
  Action,
  map,
  elementCreators,
} from "./framework.ts";

const SearchBar = component<{
  Props: {
    placeholder: string;
  };

  State: {
    searchWord: string;
  };

  Action:
    | {
      type: "update_search_word";
    }
    | {
      type: "on_done";
      $handleByParent?: true;
    };
}>({
  initialState: {
    searchWord: "",
  },
  update: (state, action, event) => {
    switch (action.type) {
      case "update_search_word":
        return {
          ...state,
          searchWord: event.target.value,
        };
    }
  },
  view: ({ props, state, element: {div, text}, dispatch }) => {
    return div({
      on: {
        click: dispatch({ type: "on_done" }),
      },
      children: [
        text({ content: props.placeholder }),
        text({
          content: state.searchWord,
          on: {
            change: dispatch({ type: "update_search_word" }),
          },
        }),
      ],
    });
  },
});

const TodoList = component<{
  State: {
    items: { content: string; done: boolean }[];
    searchBar: typeof SearchBar.initialState;
    title: string;
  };
  Action:
    | {
      type: "mark_as_done";
      itemIndex: number;
    }
    | {
      type: "search_bar_action";
      action: Action<typeof SearchBar.view>;
    };
}>({
  initialState: {
    items: [{ content: "test", done: true }],
    searchBar: SearchBar.initialState,
    title: "",
  },
  update: (state, action, event) => {
    switch (action.type) {
      case "mark_as_done":
        return {
          ...state,
          items: state.items.map((item, itemIndex) =>
            action.itemIndex === itemIndex
              ? { ...item, done: !item.done }
              : item
          ),
        };

      case "search_bar_action":
        const { action: searchBarAction } = action;
        switch (searchBarAction.type) {
          case "on_done":
            return {
              ...state,
              title: "search bar clicked!",
            };
          default:
            return {
              ...state,
              searchBar: SearchBar.update(
                state.searchBar,
                searchBarAction,
                event,
              ),
            };
        }
    }
  },
  view: ({ state, element: {div, text, button}, dispatch }) => {
    return div({
      children: [
        SearchBar.render({
          handle: (action) => dispatch({ type: "search_bar_action", action }),
          props: {
            placeholder: "hi",
          },
          state: state.searchBar,
        }),
        div({
          children: state.items.map((item, itemIndex) =>
            div({
              children: [
                text({ content: item.content }),
                button(
                  {
                    on: {
                      click: dispatch({ type: "mark_as_done", itemIndex }),
                    },
                  },
                ),
              ],
            })
          ),
        }),
      ],
    });
  },
});

mount({
  component: TodoList,
  at: document.getElementById("root"),
});
