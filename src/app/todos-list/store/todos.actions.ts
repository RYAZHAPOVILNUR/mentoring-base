import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {TodoInterface} from "../../interfaces/todo-interfaces";

export const TodosActions = createActionGroup({
    source: 'Todos',
    events: {
        'load': emptyProps,
        'loadSuccess': props<{ todos: TodoInterface[] }>(),
        'loadError': props<{ error: { message: string } }>(),
        'edit': props<{ todo: TodoInterface }>(),
        'create': props<{ todo: TodoInterface }>(),
        'delete': props<{ id: number }>()
    },
});