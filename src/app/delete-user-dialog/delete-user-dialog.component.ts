import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'delete-user-dialog.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDeleteUser{
  readonly dialogRef = inject(MatDialogRef<DialogDeleteUser>);
  readonly snackBar = inject(MatSnackBar);

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
    this.openSnackBar();
  }

  openSnackBar(): void {
    this.snackBar.open('Пользователь удалён🐒', 'Закрыть', {
      duration: 2000
    });
  }
}


