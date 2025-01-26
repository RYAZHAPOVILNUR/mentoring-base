import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { CreateEditTodoFormComponent } from '../create-edit-todo-form/create-edit-todo-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '../interfaces/todos.interface';
import { MatButton } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodoCardComponent, NgFor, AsyncPipe, MatButton],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent implements OnInit {
  todosApiservice = inject(TodosApiService);
  todosService = inject(TodosService);
  readonly dialog = inject(MatDialog);
  todos$ = this.todosService.todos$;
  private readonly destroy$ = new Subject<void>()

  ngOnInit(): void {
    this.todosApiservice
      .getTodos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((todos) => this.todosService.setTodos(todos));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateEditTodoFormComponent, {
      data: null,
    });

    dialogRef.afterClosed().subscribe((newTodo) => {
      if (dialogRef.componentInstance.createEditTodoForm.valid) {
        this.todosService.createTodo(newTodo);
      }
    });
  }

  openEditDialog(todo: Todo) {
    const dialogRef = this.dialog.open(CreateEditTodoFormComponent, {
      data: todo,
    });

    dialogRef.afterClosed().subscribe((todoChanged) => {
      if (dialogRef.componentInstance.createEditTodoForm.valid) {
        this.todosService.editTodo(todoChanged);
      }
    });
  }

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
