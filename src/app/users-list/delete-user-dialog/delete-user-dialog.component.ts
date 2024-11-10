import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IUser } from '../../Interfaces/user.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss',
})
export class DeleteUserDialogComponent {
  public readonly data = inject<{ user: IUser }>(MAT_DIALOG_DATA);

  constructor() {
    console.log('Данные, которые приходят в модалку:', this.data);
  }
}
