import { Levo, React } from "../../../mod/levo-view.ts"

export namespace Counter {
  export type State = {
    count: number
  }
  export type Action = { $: 'minus' } | {$: 'add'}
  
  export const initialState = (): State => {
    return {
      count: 0
    }
  }
  
  export const update: Levo.Update<State, Action> = (model, action, event) => {
    switch(action.$) {
      case 'add': {
        return {
          newModel: {
            ...model,
            count: model.count + 1
          }
        }
      }
  
      case 'minus': {
        return {
          newModel: {
            ...model,
            count: model.count -1
          }
        }
      }
    }
  }
  
  export const View = (props: {
    privateState: State
    dispatch: Levo.Dispatch<Action>
  }): Levo.Element => {
    return (
      <div style={{display: 'flex'}}>
        <button onclick={props.dispatch.minus()}>-</button>
        <div>{props.privateState.count}</div>
        <button onclick={props.dispatch.add()}>+</button>
      </div>
    )
  }
}