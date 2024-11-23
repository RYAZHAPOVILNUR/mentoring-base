import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DeleteTodoDialogComponent } from "../delete-todo-dialog/delete-todo-dialog.component";
import { EditTodoDialogComponent } from "../edit-todo-dialog/edit-todo-dialog.component";
import { LineTrimPipe } from "../../pipes/line-trim.pipe";
import { BoxShadowDirective } from "../../directives/box-shadow.directive";
import { YellowDirective } from "../../directives/yellow.directive";
import { ITodo } from "../../interfaces/interfaces";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [
    MatDialogModule,
    LineTrimPipe,
    BoxShadowDirective,
    YellowDirective
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: ITodo

  @Output()
  deleteTodo = new EventEmitter<number>();

  @Output()
  public editTodo = new EventEmitter<ITodo>();

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  public openDeleteTodoDialog() {
    const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      data: {todo: this.todo}
    });

    dialogRef.afterClosed().subscribe((deleteResult: boolean | undefined) => {
      if (deleteResult) {
        this.deleteTodo.emit(this.todo.id);
        this._snackBar.open('Задача удалена', 'ok', {
          duration: 3000
        })
      } else {
        this._snackBar.open('Отмена удаления', 'ok', {
          duration: 3000
        })
      }
    })
  }

  public openEditTodoDialog() {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo},
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(editResult => {
      if (editResult) {
        this.editTodo.emit(editResult)
      }
    })
  }
}
