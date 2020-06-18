import { Counter } from "./counter.tsx";

export type Action = 
| { $: "say hello" } 
| { $: "show"; color: string }
| { $: "add" }
| { $: "counterAction", action: Counter.Action}
