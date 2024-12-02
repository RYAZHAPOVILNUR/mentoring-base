import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserInterface } from "../../interfaces/user-interfaces";

export const UsersActions = createActionGroup({
    source: 'Users',
    events: {
        'load': emptyProps,
        'loadSuccess': props<{ users: UserInterface[] }>(),
        'loadError': props<{ error: { message: string } }>(),
        'edit': props<{ user: UserInterface }>(),
        'create': props<{ user: UserInterface }>(),
        'delete': props<{ id: number }>(),
    },
})
