import { ITodo } from "../../interfaces/interfaces";
import { createSelector } from "@ngrx/store";


interface TodoState {
  todos: ITodo[];
}

interface AppState {
  todos: TodoState;
}

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: TodoState) => state.todos
);
