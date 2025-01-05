import { createReducer, on, State } from "@ngrx/store"
import { TodoActions } from "./todo.actions"
import { state } from "@angular/animations"
import { Todo } from "../todos-list.component"



const initialState: { todos: Todo[] } = {
    todos: []
}

export const todoReducer = createReducer(
    initialState,
    on(TodoActions.setTodo, (state, payload) => ({
        ...state,
        todos: payload.todos,
    })),
    on(TodoActions.createTodo, (state, payload) => ({
        ...state,
        users: [...state.todos, payload.todos],
    })),
    on(TodoActions.deleteTodo, (state, payload) => ({
        ...state,
        users: state.todos.filter((todo) => todo.id !== payload.id),
    }))
)