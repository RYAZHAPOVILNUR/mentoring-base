import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interfaces';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from '../edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
  standalone: true,
  imports: [MatIconModule],
})
export class UserCardComponent {
  // @Input() user_input: any - это входное свойство для получения данных
  @Input()
  user!: UserInterface;

  // @Output() — декоратор, используемый для создания событий
  @Output()
  // EventEmitter — это класс Angular, он же обработчик события который создает событие
  deleteUser = new EventEmitter(); // deleteUser_card используем в файле html и в файле html закидываем в круглые скобки(deleteUser_card)="здесь он будет вызывать другую переменную"

  @Output()
  editUser = new EventEmitter();

  // onDeleteUser используем в файле html user-card.component.html
  onDeleteUser(userId: number) {
    // emit() выбрасывает и запускает событие и передаёт данные через userId родительскому компоненту.
    this.deleteUser.emit(userId);
  }

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { user: this.user },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) this.editUser.emit(editResult);
    });
  }

}
