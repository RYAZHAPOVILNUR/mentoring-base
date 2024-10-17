import { ChangeDetectionStrategy, Component, inject, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-user-confirmation',
  standalone: true,
  imports: [MatSnackBarModule ],
  templateUrl: './delete-user-confirmation.component.html',
  styleUrl: './delete-user-confirmation.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DeleteUserConfirmationComponent implements OnInit {

  constructor(
    public todoDeleteDialog: MatDialogRef<DeleteUserConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }
    readonly snackBar = inject(MatSnackBar);

    cancelDialog(): void {
      this.todoDeleteDialog.close(false);
    }
    confirmation(): void {
      this.todoDeleteDialog.close(true);
      this.openSnackBar()
    }

    openSnackBar(): void {
      this.snackBar.open('Пользователь удалён🐒', 'Закрыть', {
        duration: 2000
      });
    }

  ngOnInit() {
  }
}
