import { createReducer, on } from "@ngrx/store";
import { User } from "../users-list.component";
import { UsersActions } from "./users.actions";


 const initialState: { users: User[] } = {
    users: [], 
    
}; 

export const userReducer = createReducer(
    initialState, 
    on(UsersActions.setUsers, (state, payload) => ({
        ...state,
        users: payload.users,
    })),
    on(UsersActions.editUser, (state, payload) => ({
        ...state,
        users: state.users.map((user) => user.id === payload.user.id ? payload.user: user) 
    })), 
    on(UsersActions.createUser, (state, payload) => ({
        ...state, 
        users: [...state.users, payload.user],
    })), 
    on(UsersActions.deleteUser, (state, payload) => ({
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
    }))
)

