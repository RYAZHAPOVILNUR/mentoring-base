import { createSelector } from "@ngrx/store";
import { IUsers } from "../../interfaces/users.interface";

interface UserState {
    users: IUsers[];
}

interface AppState {
    users: UserState;
}

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
    selectUsersFeature,
    (state: UserState) => state.users
);