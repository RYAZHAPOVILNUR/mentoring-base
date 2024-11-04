import { Component, inject } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-login-dialog',
  templateUrl: './login.component.html',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButtonModule,
    MatDialogClose,
  ],
})
export class LoginDialogComponent {
  readonly dialogRef = inject(MatDialogRef<LoginDialogComponent>);

  loginAsAdmin(): void {
    this.dialogRef.close('admin');
  }

  loginAsUser(): void {
    this.dialogRef.close('user');
  }
}