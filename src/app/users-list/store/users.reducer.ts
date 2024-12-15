import { createReducer, on } from "@ngrx/store";
import { User } from "../users-list.interface";
import { UsersActions } from "./users.action";

const initialState: { users: User[] } ={
    users: [],
};

export const userReducer = createReducer (
    initialState,
    on(UsersActions.set, (state, payload) =>({
        ...state,
        users: payload.users,
    })),
    on(UsersActions.edit, (state, payload) => ({
        ...state,
        users: state.users.map((user) => 
           user.id === payload.user.id ? payload.user: user,
        ),
    })),
    on(UsersActions.create, (state, payload) => ({
        ...state,
        users: [...state.users, payload.user],
    })),
    on(UsersActions.delete, (state, payload) => ({
        ...state,
        users: state.users.filter((user) => user.id !== payload.id)
    })),
)