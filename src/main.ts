/// <reference lib="dom" />
import {
  Component,
  start,
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
  view: ({ props, state, element: html, dispatch }) => {
    return html.div({
      children: [
        props.placeholder,
        html.input({
          value: state.searchWord,
          events: {
            input: dispatch({type: 'update_search_word'})
          }
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
    }
    | {
      type: "add_item";
    }
    | {
      type: "update_item";
      itemIndex: number;
    };
}>({
  initialState: {
    items: [{ content: "test", done: true }],
    searchBar: SearchBar.initialState,
    title: "",
  },
  update: (state, action, event) => {
    switch (action.type) {
      case "add_item":
        const item = window.prompt("Item name?");
        if (item) {
          return {
            ...state,
            items: [...state.items, { content: item, done: false }],
          };
        } else {
          return state;
        }
      case "mark_as_done":
        return {
          ...state,
          items: state.items.map((item, itemIndex) =>
            action.itemIndex === itemIndex
              ? { ...item, done: !item.done }
              : item
          ),
        };

      case "update_item": {
        return {
          ...state,
          items: state.items.map((item, index) =>
            index === action.itemIndex
              ? { ...item, content: event?.target?.value }
              : item
          ),
        };
      }

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
  view: ({ state, element: { div, button, input }, dispatch }) => {
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
          children: [
            ...state.items.map((item, itemIndex) =>
              div({
                children: [
                  input({
                    value: item.content,
                    events: {
                      blur: dispatch({type: 'update_item', itemIndex})
                    }
                  }),
                  button({
                    attr: {
                      value: item.done ? "undone" : "done",
                    },
                    events: {
                      click: dispatch({type: 'mark_as_done', itemIndex})
                    }
                  }),
                ],
              })
            ),
            button({
              attr: { value: state.searchBar.searchWord },
              events: {
                click: dispatch({type: 'add_item'})
              }
            }),
          ],
        }),
      ],
    });
  },
});

console.log("hello");

start({
  component: TodoList,
  at: document.getElementById("root"),
});
