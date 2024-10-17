import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { UserInterface } from '../../interfaces/user-interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
  public readonly data = inject<{ user: UserInterface }>(MAT_DIALOG_DATA);
}
