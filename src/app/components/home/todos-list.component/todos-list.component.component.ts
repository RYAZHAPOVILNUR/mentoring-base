import {ChangeDetectionStrategy, Component, inject, OnInit,} from '@angular/core';
import {AsyncPipe, NgFor} from '@angular/common';
import {TodoCardComponent} from './todo-card/todo-card.component';
import {CreateTodosFormComponent} from '../create-todos-form/create-todos-form.component';
import {Todo} from '../../../interfaces/user-interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {CreateTodoDialogComponent} from './todo-card/create-todo-dialog/create-todo-dialog.component';
import {TodosApiService} from '../../../services/todosApi.service';
import {MatButtonModule} from '@angular/material/button';
import {Store} from "@ngrx/store";
import {TodoActions} from "./todos-store/todo.actions";
import {selectTodos} from "./todos-store/todos.selectors";


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor,MatButtonModule, TodoCardComponent, AsyncPipe, CreateTodosFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todos-list.component.component.html',
  styleUrl: './todos-list.component.component.scss',
})
export class TodosListComponent implements OnInit {
  readonly todosApiService = inject(TodosApiService);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);


  ngOnInit() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.store.dispatch(TodoActions.set({todos: response.slice(0, 6)}));
    })
  }

  public createTodo(formData: Todo) {
    this.store.dispatch(
      TodoActions.create({
        todo: {
          id: new Date().getTime(),
          title: formData.title,
          userId: formData.userId,
          completed: formData.completed,
        }
      })
    )
  }

  public editTodo(todo: Todo) {
    this.store.dispatch(
      TodoActions.edit({todo})
    )
  }

  //*MARK:delete-method
  public deleteTodo(id: number) {
    this.store.dispatch(
      TodoActions.delete({id})
    )
  }

  readonly snackBar = inject(MatSnackBar);

  readonly dialogTwo = inject(MatDialog);

  createTodoDialog(): void {
    const dialogRef = this.dialogTwo.open(CreateTodoDialogComponent, {
      data: { todo: this.todos$ },
    });

    dialogRef.afterClosed().subscribe((createResult: Todo) => {
      if (createResult) {
        this.createTodo(createResult);
        this.openSnackBarTwo();
      }
    });
  }

  readonly snackBarCreate = inject(MatSnackBar);

  openSnackBarTwo(): void {
    this.snackBar.open('Задача создана🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
