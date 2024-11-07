import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[MatButtonModule,MatDialogModule],
  standalone: true,
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
