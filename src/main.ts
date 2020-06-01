import { start, } from "./framework.ts";
import { elementCreatorsx } from "./element-creators.ts";
type TodoAppModel = {
  items: {
    content: string;
    done: boolean;
  }[];
}

const TodoAppView = <Action>(
  action: {
    clickItemDoneButton: (itemIndex: number) => Action;
    addItem: Action
    onItemContentChange: (itemIndex: number) => Action
  },
) => (
  model: TodoAppModel
) => {
  const $ = elementCreatorsx<Action>();
  return $.div({}, [
    $.text("TODO App"),
    $.div({}, [
      $.div({},
        model.items.map((item, itemIndex) => 
          $.div({
            style: {
              backgroundColor: item.done ? 'grey' : 'green'
            }
          }, [
            $.input({
              value: item.content,
              events: {
                input: !item.done ? action.onItemContentChange(itemIndex) : undefined
              }
            }),
            $.button({
              events: {
                click: action.clickItemDoneButton(itemIndex),
              },
            }, [
              $.text(item.done ? "undone" : "done"),
            ]),
          ])
        )
      ),
      $.button({
        events: {
          click: action.addItem
        }
      }, [
        $.text("Add item")
      ])
    ])
  ]);
};

type TodoAppAction = 
| {
  type: 'toggle_done'
  itemIndex: number
}
| {
  type: "add_item";
}
| {
  type: "update_item";
  itemIndex: number;
};

start<TodoAppModel, TodoAppAction>({
  view: TodoAppView<TodoAppAction>({
    clickItemDoneButton: (itemIndex) => ({type: 'toggle_done', itemIndex}),
    addItem: {type: "add_item"},
    onItemContentChange: (itemIndex) => ({type: 'update_item', itemIndex})
  }),
  initialModel: {
    items: new Array(0).fill({content: '', done: true})
  },
  update: (model, action, event) => {
    switch(action.type) {
      case 'toggle_done': {
        return {
          ...model, 
          items: model.items.map((item, index) => 
            index === action.itemIndex
              ? {...item, done: !item.done}
              : item
          )
        }
      }
      case 'add_item': {
        return {
          ...model,
          items: [...model.items, {content: '', done: false}]
        }
      }
      case 'update_item': {
        return {
          ...model,
          items: model.items.map((item, index) => 
            index === action.itemIndex
              ? {...item, content: (event?.target as HTMLInputElement).value}
              : item
          )
        }
      }
    }
  },
  at: document.getElementById("root"),
});
