import { Todo } from "../todos-list.interface";
import { createSelector } from "@ngrx/store";

interface TodoState {
    todos: Todo[];
}

interface AppState {
    todos: TodoState;
}

export const selectTodosFeteare = (state: AppState) => state.todos;

export const selectTodos = createSelector (
    selectTodosFeteare,
    (state: TodoState) => state.todos
);