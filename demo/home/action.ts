export type Action = 
  | { $: 'add' } 
  | { $: 'minus' }
  | { $: 'set_interval_id', intervalId: number }
  | { $: 'stop_interval' }
  | { $: 'fetch' }
  | { $: 'text_fetched', text: string }