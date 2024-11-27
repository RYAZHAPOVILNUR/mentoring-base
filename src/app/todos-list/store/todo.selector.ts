import { createSelector } from "@ngrx/store";
import { AppState, TodoState } from "../../interfaces/todostate-interface";

export const selectTodoFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodoFeature, 
  (state: TodoState) => state.todos
);