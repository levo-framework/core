export type Action = 
  | {
    type: 'add'
  } 
  | {
    type: 'minus'
  }
  | {
    type: 'set_interval_id',
    intervalId: number
  }
  | {
    type: 'stop_interval'
  }