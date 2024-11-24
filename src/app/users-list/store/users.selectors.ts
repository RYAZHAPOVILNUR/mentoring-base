import { IUser } from "../../interfaces/interfaces";
import { createSelector } from "@ngrx/store";

interface UserState {
  users: IUser[];
}

interface AppState {
  users: UserState;
}

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.users
)
