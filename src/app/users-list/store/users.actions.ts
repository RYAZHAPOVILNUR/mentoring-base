import { createActionGroup, props } from "@ngrx/store";
import { IUser } from "../../interfaces/interfaces";

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'set': props<{ users: IUser[] }>(),
    'edit': props<{ user: IUser}>(),
    'create': props<{ user: IUser}>(),
    'delete': props<{ id: number }>(),
  },
});
