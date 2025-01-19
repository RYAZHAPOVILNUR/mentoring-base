import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '../../../../interfaces/todo.interface';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    load: emptyProps(),
    set: props<{ todos: Todo[] }>(),
    create: props<{ todo: Todo }>(),
    delete: props<{ id: number }>(),
  },
});
