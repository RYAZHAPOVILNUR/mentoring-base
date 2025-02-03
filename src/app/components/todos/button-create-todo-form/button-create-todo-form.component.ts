import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoFormComponent } from '../create-todo-form/create-todo-form.component';

@Component({
  selector: 'app-button-create-todo-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-create-todo-form.component.html',
  styleUrl: './button-create-todo-form.component.scss'
})
export class ButtonCreateTodoFormComponent {
  
 @Output()
  createTodo = new EventEmitter();

  readonly dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoFormComponent);
    dialogRef.afterClosed().subscribe(editResult => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
      if (editResult) {
        this.createTodo.emit(editResult)
        this.snackBar.open('Пользователь добавлен', 'Ok', {
          duration: 3000
        });
      }
    });
  }
}
