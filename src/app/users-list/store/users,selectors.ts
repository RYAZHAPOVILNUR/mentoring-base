import { User } from "../users-list.interface";
import { createSelector } from "@ngrx/store";


interface UserState {
    users: User[];
}

interface AppState {
    users: UserState;
}

export const selectUsersFetuare = (state: AppState) => state.users;

export const selectUsers = createSelector (
    selectUsersFetuare,
    (state: UserState) => state.users
);