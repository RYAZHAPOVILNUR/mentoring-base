import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserInterface } from '../../interfaces/user-interfaces';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-create-user-form-btn-add-dialog',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './create-user-form-btn-add-dialog.component.html',
  styleUrl: './create-user-form-btn-add-dialog.component.scss'
})
export class CreateUserFormBtnAddDialogComponent {
  @Output()
  public createUserButton = new EventEmitter<CreateUserInterface>();

  readonly dailog = inject(MatDialog);
  
  public snackBar = inject(MatSnackBar);

  openCreateOpenButtonAddDialog(): void {
    // открываем модалку. Ничего внутрь не передаем, а зачем нам передавать data { user }? мы же его только создаем. То, что ты передашь будет = undefined
    const dialogRef = this.dailog.open(CreateUserDialogComponent);

    dialogRef.afterClosed().subscribe((result: CreateUserInterface) => {
      // если результат true (то-есть данные пришли), тогда эмитим(отправляем) эти данные в users-list
      if (result) {
        this.createUserButton.emit(result);
        this.snackBar.open('Пользователь создан!', 'Ok', {
          duration: 5000
        });
      } else {
        this.snackBar.open('Отмена создания!', 'Ok', {
          duration: 5000
        });
      }
    })
  }
}
