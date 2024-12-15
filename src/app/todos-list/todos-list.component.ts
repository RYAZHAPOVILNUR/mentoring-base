import { ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { Todo } from './todos-list.interface';
import { TodosCardComponent } from "./todos-card/todos-card.component";
import { CommonModule, NgFor } from '@angular/common';
import { CreateTodosFormComponent } from '../create-todos-form/create-todos-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { selectTodos } from './store/todos.selectors';
import { TodosActions } from './store/todos.action';
import { DeleteTodoDialogComponent } from './delete-todo-dialog/delete-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodosCardComponent, NgFor, CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent {
  private readonly store = inject(Store);
  private snackBar = inject(MatSnackBar);
  public readonly todos$ = this.store.select(selectTodos);
  readonly todosApiService = inject(TodosApiService);
  
  @Input() 
    readonly dialog = inject(MatDialog)
  
 
  constructor() {
    this.todosApiService.getTodos().subscribe(
        (response: Todo[]) => {
          this.store.dispatch(TodosActions.set({todos: response}));
      });
  }deleteTodo(id: number): void {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(TodosActions.delete({id}));
        this.snackBar.open('Пользователь успешно удалён', 'Закрыть', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Отмена удаления',  'Закрыть', {
          duration: 3000,
        });
      }
    });
  }

  editTodo(todo: Todo): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '500px', height: '400px',
      data: { todo }
    });
    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.store.dispatch(TodosActions.edit({todo: editResult}));
        this.snackBar.open('Задача успешно обновлена', 'Закрыть', { duration: 3000 });
      }else {
        this.snackBar.open('Отмена редактирования', 'Закрыть', { duration: 3000 });
      }
    });
  }  
  createTodo(): void {
    const dialogRef = this.dialog.open(CreateTodosFormComponent, {
      width: '500px', height: '400px',
      data: {},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newTodo = {
          id: new Date().getTime(),
          userId: result.userId,
          title: result.title,
          completed: result.completed,
         };
        this.store.dispatch(TodosActions.create ({todo: newTodo}))
        this.snackBar.open('НОВАЯ ЗАДАЧА ДОБАВЛЕНА', 'Закрыть', {
          duration: 3000,
        }); 
      }
    });
  }
}
 
