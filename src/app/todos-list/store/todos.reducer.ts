import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../todo-interface";
import { TodoActoins } from "./todo.actions";

const initialState: {todos: Todo[]} = {
    todos: [],
};

export const todoReducer = createReducer(
    initialState,
    on(TodoActoins.set, (state, payload) =>({
        ...state, 
        todos: payload.todos,
    })),
    on(TodoActoins.edit, (state, payload) => ({
        ...state, 
        todos: state.todos.map((todo) => {
        if (todo.id === payload.todo.id) {
            return payload.todo;
        } else {
            return todo;
        }
    })
    })),
    on(TodoActoins.create, (state, payload) => ({
        ...state,
        todos: [...state.todos, payload.todo],
    })),
    on(TodoActoins.delete, (state, payload) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
    }))
)