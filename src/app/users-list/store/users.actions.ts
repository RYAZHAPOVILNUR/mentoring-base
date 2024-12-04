import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../interfaces/user-interface';

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    load: props<{ users: User[] }>(),
    loadedSuccess: props<{ users: User[] }>(),
    loadedError: props<{ error: { message: string } }>(),
    edit: props<{ user: User }>(),
    create: props<{ user: User }>(),
    delete: props<{ id: number }>(),
  },
});
