import { Todo } from "./todo-interface";

export interface TodoState {
  todos: Todo[],
}

export interface AppState {
  todos: TodoState,
}