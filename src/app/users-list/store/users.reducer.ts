import { createReducer, on } from '@ngrx/store';
import { User } from '../../interfaces/user-interface';
import { UsersActions } from './users.actions';

const initialState: { users: User[] } = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.load, (state, payload) => ({
    ...state,
    users: payload.users,
  })),
  on(UsersActions.loadedSuccess, (state, payload) => ({
    ...state,
    users: payload.users,
  })),
  on(UsersActions.loadedError, (state, payload) => {
    alert(payload.error.message);
    return {
      ...state,
    };
  }),
  on(UsersActions.edit, (state, payload) => ({
    ...state,
    users: state.users.map((user) =>
      user.id === payload.user.id ? payload.user : user
    ),
  })),
  on(UsersActions.create, (state, payload) => ({
    ...state,
    users: [...state.users, payload.user],
  })),
  on(UsersActions.delete, (state, payload) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload.id),
  }))
);
