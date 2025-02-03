import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserFormComponent } from '../create-user-form/create-user-form.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button-create-user-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button-create-user-form.component.html',
  styleUrl: './button-create-user-form.component.scss'
})
export class ButtonCreateUserFormComponent {

  @Output()
  createUser = new EventEmitter();

  readonly dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserFormComponent);
    dialogRef.afterClosed().subscribe(editResult => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ:', editResult);
      if (editResult) {
        this.createUser.emit(editResult)
        this.snackBar.open('Пользователь добавлен', 'Ok', {
          duration: 3000
        });
      }
    });
  }
}
