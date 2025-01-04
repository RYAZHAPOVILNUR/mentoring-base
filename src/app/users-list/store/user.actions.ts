import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../interfaces/interfaces';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    set: props<{ users: User[] }>(),
    edit: props<{ user: User  }>(),
    create: props<{ user: User }>(),
    delete: props<{ id: number }>(),
  },
});
