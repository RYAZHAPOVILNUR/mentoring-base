import { createSelector } from '@ngrx/store';
import { AppState, UserState } from '../user.state';

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.users
);