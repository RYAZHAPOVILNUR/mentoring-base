import { createReducer, on } from '@ngrx/store';
import { User } from '../../../../interfaces/user.interface';
import { UsersActions } from './users.action';

export const initialState: { users: User[] } = {
  users: [],
};

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
