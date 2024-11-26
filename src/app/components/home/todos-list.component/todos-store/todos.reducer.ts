import {createReducer, on} from "@ngrx/store";
import {TodoActions} from "./todo.actions";
import {Todo} from "../../../../interfaces/user-interface";

const initialState: {todos: Todo[]} = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.set, (state, payload) =>({
    ...state,
    todos: payload.todos
  })),

  on(TodoActions.edit, (state, payload) =>({
    ...state,
    todos: state.todos.map((todo) => todo.id === payload.todo.id ? payload.todo : todo)
  })),

  on(TodoActions.create, (state, payload) =>({
    ...state,
    todos: [...state.todos, payload.todo]
  })),

  on(TodoActions.delete, (state, payload) =>({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload.id),
  })),
)
