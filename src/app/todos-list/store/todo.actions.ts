import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../../todo-interface";

export const TodoActoins = createActionGroup ({
    source: 'Todos',
    events: {
        'set': props<{todos: Todo[]}>(),
        'edit': props<{todo: Todo}>(),
        'create': props<{todo: Todo}>(),
        'delete': props<{id: number}>(),
    },
});