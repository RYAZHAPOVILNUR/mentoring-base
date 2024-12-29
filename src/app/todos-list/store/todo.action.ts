import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../../interfaces/todo.interface";

export const TodoAction = createActionGroup({
    source: 'Todos',
    events: {
        'set': props<{todos: Todo[]}>(),

        'create': props<{ todo: Todo }>(),

        'delete': props<{id: number }>()
    }
});