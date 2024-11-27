import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../interfaces/todo-interface";
import { TodosActions } from "./todo.actions";
import { state } from "@angular/animations";

const initialState: {todos: Todo []} = {
  todos: [],
}

export const todoReducer = createReducer (
  initialState,
  on(TodosActions.set, (state, payload) => ({
    ...state,
    todos: payload.todos,
  })),
  on(TodosActions.edit, (state, payload) => ({
    ...state,
    todos: state.todos.map((todo) => {
        if (todo.id === payload.todo.id) {
          return payload.todo 
        } else {
          return todo
        }
    })
  })),
  on(TodosActions.create, (state, payload ) => {
    const existingTodo = state.todos.find((currentTodo) => currentTodo.title === payload.todo.title);
  
    if (existingTodo) {
      alert('Такая задача уже добавлена');
      return state;
    }

    return {
      ...state,
      todos: [...state.todos, payload.todo],
    };
  }),
  on(TodosActions.delete, (state, payload) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload.id)
  })),
)