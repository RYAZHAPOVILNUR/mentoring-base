import { createActionGroup, props } from "@ngrx/store";
import { Todo } from "../todos-list.component";


export const TodoActions = createActionGroup({
    source: 'Users',
    events: {
        'setTodo': props<{ todos: Todo[] }>(),

        'deleteTodo': props<{ id: number }>(),

        'CreateTodo': props<{ todos: Todo }>(),
    }
})