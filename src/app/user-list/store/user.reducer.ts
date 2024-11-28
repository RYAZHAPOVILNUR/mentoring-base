import { createReducer, on } from "@ngrx/store";
import { User } from "../../interfaces/user-interface";
import { UsersActions } from "./user.actions";

const initialState: {users: User[]} = {
  users: [],
};

export const userReduсer = createReducer(
  initialState,
  on(UsersActions.set, (state, payload) => ({
    ...state,
    users: payload.users,
  })),
  on(UsersActions.edit, (state, payload) => ({
    ...state,
    users: state.users.map((user) => user.id === payload.user.id ? payload.user : user),
  })),  
  on(UsersActions.delete, (state, payload) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload.id)
  })),
  on(UsersActions.create, (state, payload) => ({
    ...state,
    users: [...state.users, payload.user]
  })),
)