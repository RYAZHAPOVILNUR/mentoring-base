import { createReducer, on } from "@ngrx/store";
import { IUsers } from "../users-list.component";
import { UsersAction } from "./user.actions";

const initialState: { users: IUsers[] } = {
    users: [],
}


export const userReducer = createReducer(
    initialState,
    on(UsersAction.set, (state, payload) => ({
        ...state,
        users: payload.users,
    })),
    on(UsersAction.edit, (state, payload) => ({
        ...state,
        users: state.users.map((user) => {
            if (user.id === payload.user.id) {
                return payload.user;
            } else {
                return user;
            }
        }),
    })),
    on(UsersAction.create, (state, payload) => ({
        ...state,
        users: [...state.users, payload.user],
    })),
    on(UsersAction.delete, (state, payload) => ({
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
    }))
);