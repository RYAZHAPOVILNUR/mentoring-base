import { createSelector } from '@ngrx/store';
import { AppState, TodoState } from '../todo.state';

export const selectTodosFeature = (state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: TodoState) => state.todos
);