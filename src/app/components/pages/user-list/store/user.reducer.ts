import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.action';
import { User } from '../../../../interfaces/user.interface';

// Начальное состояние
export const initialState: { users: User[] } = {
  users: [],
};

// Создание редюсера
export const userReducer = createReducer(
  initialState,

  on(UsersActions.set, (state, { users }) => ({
    ...state,
    users,
  })),

  on(UsersActions.edit, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? user : u)),
  })),

  on(UsersActions.create, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),

  on(UsersActions.delete, (state, { id }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== id),
  }))
);
