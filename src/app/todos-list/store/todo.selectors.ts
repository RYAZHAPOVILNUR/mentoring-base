import { createSelector } from "@ngrx/store";
import { Todo } from "../todos-list.component";


interface TodoState {
    todos: Todo[]
}

interface AppState {
    todo: TodoState
}

export const selectTodoFeature = (state: AppState) => state.todo;

export const selectTodo = createSelector(
    selectTodoFeature,
    (state: TodoState) => state.todos
)