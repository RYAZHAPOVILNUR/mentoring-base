import { createReducer, on } from "@ngrx/store";
import { ITodo } from "../../interfaces/todos.interface";
import { TodosActions } from "./todo.actions";

const initialState: { todos: ITodo[] } = {
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
        todos: state.todos.filter((todo) => todo.id !== payload.id),
    }))
);