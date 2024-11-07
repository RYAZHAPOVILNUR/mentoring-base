import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  readonly dialogRef = inject(MatDialogRef<LoginComponent>);

  loginAsAdmin(): void {
    this.dialogRef.close('admin');
  }

  loginAsUser(): void {
    this.dialogRef.close('user');
  }
}
