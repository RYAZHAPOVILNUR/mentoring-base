import { createSelector } from "@ngrx/store";
import { Todo } from "../../interfaces/todo-interface";

export interface TodoState {
  todos: Todo[],
}

export interface AppState {
  todos: TodoState,
}
export const selectTodoFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodoFeature, 
  (state: TodoState) => state.todos
);