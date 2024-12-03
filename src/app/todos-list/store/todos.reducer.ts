import {TodoInterface} from "../../interfaces/todo-interfaces";
import {createReducer, on} from "@ngrx/store";
import {TodosActions} from "./todos.actions";

const initialState: { todos: TodoInterface[] } = {
    todos: [],
}

export const todoReducer = createReducer(
    initialState,
    on(TodosActions.loadSuccess, (state: { todos: TodoInterface[] }, payload) => ({
        ...state,
        todos: payload.todos.slice(0, 10),
    })),

    on(TodosActions.edit, (state: { todos: TodoInterface[] }, payload) => ({
        ...state,
        todos: state.todos.map((todo: TodoInterface) => {
            return todo.id === payload.todo.id ? payload.todo : todo;
        })
    })),

    on(TodosActions.create, (state: { todos: TodoInterface[] }, payload) => ({
        ...state,
        todos: [...state.todos, payload.todo],
    })),

    on(TodosActions.delete, (state: { todos: TodoInterface[] }, payload) => ({
        ...state,
        todos: state.todos.filter((todo: TodoInterface) => todo.id !== payload.id),
    })),
)