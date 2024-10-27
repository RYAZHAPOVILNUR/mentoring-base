import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateTodoDialogComponent } from '../create-todo-dialog/create-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-create-todo-form-btn-add-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './todo-create-button.component.html',
  styleUrl: './todo-create-button.component.scss'
})
export class TodoCreateButtonComponent {
  
  readonly dailog = inject(MatDialog);
  
  public snackBar = inject(MatSnackBar);
  
  @Output()
  public createTodoButtonAdd = new EventEmitter<TodoInterface>();

  openCreateTodoButtonAddDialog(): void {
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
