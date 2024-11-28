import { createSelector } from "@ngrx/store";
import { User } from "../../interfaces/user-interface";

export interface UserState {
  users: User [];
}

export interface AppState {
  users: UserState;
}

export const selectUserFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUserFeature,
  (state: UserState) => state.users
);