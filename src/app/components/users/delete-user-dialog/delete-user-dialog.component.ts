import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { User } from '../users.component';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButton, MatIconModule,],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
  public readonly data = inject<{user: User}>(MAT_DIALOG_DATA)

  constructor () {
    console. log('Данные которые приходят в модалку:',this.data)
  }
}
