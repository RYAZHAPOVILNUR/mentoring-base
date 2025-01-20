import { createActionGroup, props } from "@ngrx/store";
import { IUsers } from "../../interfaces/users.interface";


export const UsersAction = createActionGroup({
    source: 'Users',
    events: {
        'set': props<{users: IUsers[]}>(),

        'edit': props<{user: IUsers}>(),

        'create': props<{user: IUsers}>(),

        'delete': props<{id: number}>(),
    },
});