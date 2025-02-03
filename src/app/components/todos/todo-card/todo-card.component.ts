
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Todo } from '../todos.component';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [MatDialogModule,],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input()
  todo!: Todo

  @Output()
  deleteTodo = new EventEmitter();

  @Output()
  editTodo = new EventEmitter();

   readonly dialog = inject(MatDialog);

   private snackBar = inject(MatSnackBar);

   openDeleteDialog(): void {
      const dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
        data: {todo:this.todo},
      });
  
      dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
        if (result) {
          this.deleteTodo.emit(this.todo.id)
          this.snackBar.open('Пользователь удален', 'Ok', {
            duration: 3000
          });
        
          console.log('Пользователь удален',this.todo.id)
        }
    
        console.log(result)
      });
    }

  openDialog(): void {
      const dialogRef = this.dialog.open(EditTodoDialogComponent, {
        data: {todo:this.todo},
      });
      dialogRef.afterClosed().subscribe(editResult => {
        console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
        if (editResult) {
          this.editTodo.emit(editResult);
          this.snackBar.open('Пользователь отредактирован', 'Ok', {
           duration: 3000
         });
        }
      });
    }
}
