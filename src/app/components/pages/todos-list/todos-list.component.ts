import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Todo } from '../../../interfaces/todo.interface';
import { CreateTodoFormComponent } from '../../forms/create-todo-form/create-todo-form.component';
import { Observable } from 'rxjs';
import { TodosActions } from './store/todos.action';
import { Store } from '@ngrx/store';
import { selectTodos } from './store/todos.selector';

@Component({
  selector: 'app-todos-list',
  imports: [TodosCardComponent, NgFor, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  private readonly store = inject(Store);
  public readonly todos$: Observable<Todo[]> = this.store.select(selectTodos);

  ngOnInit() {
    this.store.dispatch(TodosActions.load());
  }

  createTodo(formData: Todo) {
    this.store.dispatch(TodosActions.create({ todo: formData }));
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodosActions.delete({ id: id }));
  }
}
