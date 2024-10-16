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
    public dialogo: MatDialogRef<DeleteUserConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }
    readonly snackBar = inject(MatSnackBar);

    cancelDialog(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
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
