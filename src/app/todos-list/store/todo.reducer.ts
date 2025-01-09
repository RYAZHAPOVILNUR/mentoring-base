import { createReducer, on } from "@ngrx/store";
import { Todo } from "../todos-list.component";
import { TodosActions } from "./todo.actions";

const initialState: { todos: Todo[] } = {
    todos: [],
}

export const todoReducer = createReducer(
    initialState,
    on(TodosActions.set, (state, payload) => ({
        ...state,
        todos: payload.todos,
    })),
    
    on(TodosActions.edit, (state, payload) => ({
        ...state,
        todos: state.todos.map((todo) => {
            if (todo.id === payload.todo.id) {
                return payload.todo;
            } else {
                return todo;
            }
        }),
    })),

    on(TodosActions.create, (state, payload) => ({
        ...state,
        todos: [...state.todos, payload.todo],
    })),

    on(TodosActions.delete, (state, payload) => ({
        ...state,
        users: state.todos.filter((todo) => todo.id !== payload.id),
    }))
);