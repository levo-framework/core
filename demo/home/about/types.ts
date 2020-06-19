import { Counter } from "./counter.tsx";

export type Model = {
  randomNumber: number;
  counterState: Counter.Model;
};

export type Action =
  | { $: "counter_action"; action: Counter.Action }
  | { $: "update_random_number" };
