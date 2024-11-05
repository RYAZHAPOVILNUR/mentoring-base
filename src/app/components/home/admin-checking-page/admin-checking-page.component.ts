import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthUserService } from '../../../services/auth-user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogActions,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-admin-checking-page',
  standalone: true,
  imports: [
    NgIf,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatDialogActions,
  ],
  templateUrl: './admin-checking-page.component.html',
})
export class AdminCheckingPageComponent {
  constructor(public dialogRef: MatDialogRef<AdminCheckingPageComponent>) {}

  public loginAsAdmin(): void {
    this.dialogRef.close('admin');
  }

  public loginAsUser(): void {
    this.dialogRef.close('user');
  }
}
