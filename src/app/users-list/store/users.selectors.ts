import { createSelector } from "@ngrx/store";
import { IUsers } from "../users-list.component";

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