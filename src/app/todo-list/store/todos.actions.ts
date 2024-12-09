import { createActionGroup, props } from '@ngrx/store';
import { ITodo } from '../../Interfaces/todo.interface';

export const TodosActions = createActionGroup({
  source: 'Todos',
  events: {
    set: props<{ todos: ITodo[] }>(),
    edit: props<{ todo: ITodo }>(),
    create: props<{ todo: ITodo }>(),
    delete: props<{ id: number }>(),
  },
});
