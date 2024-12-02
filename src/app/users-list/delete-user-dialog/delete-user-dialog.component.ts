import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteUserDialogComponent>)


  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }
}
