import { Todo } from "../interfaces/todo-interfaces";

export interface TodoState {
 todos: Todo[];
}

export interface AppState {
 todos: TodoState;
}