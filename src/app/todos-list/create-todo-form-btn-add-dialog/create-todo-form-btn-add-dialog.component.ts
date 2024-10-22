import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoDialogComponent } from '../create-todo-dialog/create-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-todo-form-btn-add-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './create-todo-form-btn-add-dialog.component.html',
  styleUrl: './create-todo-form-btn-add-dialog.component.scss'
})
export class CreateTodoFormBtnAddDialogComponent {

  @Output()
  public createTodoButtonAdd = new EventEmitter<TodoInterface>();

  readonly dailog = inject(MatDialog);

  public snackBar = inject(MatSnackBar);

  openCreateOpenButtonAddDialog(): void {
    // открываем модалку. Ничего внутрь не передаем, а зачем нам передавать data { user }? мы же его только создаем. То, что ты передашь будет = undefined
    const dialogRef = this.dailog.open(CreateTodoDialogComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((result: TodoInterface) => {
      // если результат true (то-есть данные пришли), тогда эмитим(отправляем) эти данные в users-list
      if (result) {
        this.createTodoButtonAdd.emit(result);
        this.snackBar.open('ЗАДАЧА СОЗДАНА!', 'Ok', {
          duration: 5000
        });
      } else {
        this.snackBar.open('ОТМЕНА СОЗДАНИЯ!', 'Ok', {
          duration: 5000
        });
      }
    })
  }

}
