import {TodoInterface} from "../../interfaces/todo-interfaces";
import {createSelector} from "@ngrx/store";

interface TodoState {
    todos: TodoInterface[];
}

interface AppState {
    todos: TodoState;
}

export const selectTodosFeature: (state: AppState) => TodoState = (state: AppState) => state.todos;

export const selectTodo = createSelector(
    selectTodosFeature,
    (state: TodoState) => state.todos
);