import { createSelector } from "@ngrx/store";
import { AppState, UserState } from "../../interfaces/userstate-interface";


export const selectUserFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUserFeature,
  (state: UserState) => state.users
);