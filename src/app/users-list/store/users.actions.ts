import { createActionGroup, props } from "@ngrx/store";
import { User } from "../users-list.component";


export const UsersActions = createActionGroup({
    source: 'Users',
    events: {
        'setUsers': props<{users: User[]}>(),
        
        'editUser': props<{ user: User}>(), 

        'createUser': props<{ user: User}>(),

        'deleteUser': props<{id: number}>(),
    }
})