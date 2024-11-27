import { NgFor } from "@angular/common";
import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Todo } from "../todos-list.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DeleteTodoDialogComponent } from "../delete-todo-dialog/delete-todo-dialog.component";
import { CustomSlicePipe } from "../../pipes/slice.pipe";

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrl: './todo-card.component.scss',
    standalone: true,
    imports: [CustomSlicePipe]
})

export class TodoCardComponent {
    @Input()
    todo!: Todo;

    @Output()
    deleteTodo = new EventEmitter<number>()

    readonly dialog = inject(MatDialog); // 1 действие чтобы открывалась модалка
    readonly snackbar = inject(MatSnackBar);

    openDelDialog(): void { //2 действие - функция с material ui чтобы метод открывал компонент DeleteUserDialogComponent
        const dialogDelRef = this.dialog.open(DeleteTodoDialogComponent, {
          data: { todo: this.todo }, //2 действие - это то что отправляем в данные после нажатия; dialog - это inject(MatDialog) строка 24
        });
    
        dialogDelRef.afterClosed().subscribe(deleteResult => {
          // console.log('The delete-dialog was closed', deleteResult);
          if (deleteResult) {
            console.log(deleteResult)
              this.deleteTodo.emit(this.todo.id) //emit - отправка события
              this.snackbar.open('TODO deleted', 'OK', {duration: 3000})
          }
          else {
            this.snackbar.open('DELETE canseled', '', {duration: 3000})
          }
        });
      }


    onDeleteTodo(todoId: number) {
        this.deleteTodo.emit(todoId)
    }
}