import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../interfaces/todo-interface';
import { TodosActions } from './todos.actions';

const initialState: { todos: Todo[] } = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.set, (state, payload) => ({
    ...state,
    todos: payload.todos,
  })),
  on(TodosActions.loadedSuccess, (state, payload) => ({
    ...state,
    todos: payload.todos,
  })),
  on(TodosActions.loadedError, (state, payload) => {
    alert(payload.error.message);
    return {
      ...state,
    };
  }),
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
