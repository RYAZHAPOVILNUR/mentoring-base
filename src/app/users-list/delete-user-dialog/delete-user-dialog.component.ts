import {Component, inject} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  imports: [
    MatButton
  ],
  standalone: true
})
export class DeleteUserDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteUserDialogComponent>);

  public onConfirm() {
    this.dialogRef.close(true);
  }

  public onCancel() {
    this.dialogRef.close(false);
  }
}
