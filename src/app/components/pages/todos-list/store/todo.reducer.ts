import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../../../interfaces/todo.interface';
import { TodosActions } from './todos.action';

export const initialState: { todos: Todo[] } = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,

  on(TodosActions.set, (state, { todos }) => ({
    ...state,
    todos,
  })),

  on(TodosActions.create, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  on(TodosActions.delete, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
