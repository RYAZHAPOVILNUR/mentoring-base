import { createActionGroup, props } from '@ngrx/store';
import { Todo } from '../../interfaces/todo-interface';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    load: props<{ todos: Todo[] }>(),
    loadedSuccess: props<{ todos: Todo[] }>(),
    loadedError: props<{ error: { message: string } }>(),
    edit: props<{ todo: Todo }>(),
    create: props<{ todo: Todo }>(),
    delete: props<{ id: number }>(),
  },
});
