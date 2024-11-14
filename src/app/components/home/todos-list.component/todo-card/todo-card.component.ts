import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Todo} from '../../../../interfaces/user-interface';
import {MatCardModule} from '@angular/material/card';
import {DeleteTodoConfirmationComponent} from './delete-todo-confirmation/delete-todo-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {EditTodoDialogComponent} from './edit-todo-dialog/edit-todo-dialog.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {customTitleCutPipe} from '../../../../pipes/title-cut.pipe';
import {shadowDirective} from '../../../../directives/shadow.directive';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonToggleModule,
    customTitleCutPipe,
    shadowDirective,
    MatButtonModule
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  private confirmationDialog = inject(MatDialog)

  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  @Output()
  editTodo = new EventEmitter();

  @Output()
  createTodo = new EventEmitter();

  private onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }

  public deleteTodoDialog(): void {
    this.confirmationDialog
      .open(DeleteTodoConfirmationComponent, {
        data: `Do you want to delete todo?`,
      })
      .afterClosed()
      .subscribe((confirmation: boolean) => {
        if (confirmation) {
          this.onDeleteTodo(this.todo.id);
          alert('Todo is deleted');
        }
      });
  }

  private dialog = inject(MatDialog);

  public editTodoDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editResult: Todo) => {
      if (editResult) {
        this.editTodo.emit(editResult);
        this.openSnackBar();
      }
    });
  }

  private snackBar = inject(MatSnackBar);

  private openSnackBar(): void {
    this.snackBar.open('Задача редактирована🐒', 'Закрыть', {
      duration: 2000,
    });
  }
}
