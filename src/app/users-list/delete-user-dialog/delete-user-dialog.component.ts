import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
    public readonly data = inject(MAT_DIALOG_DATA)
}
