import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AuthUserService } from '../../../services/auth-user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
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
  ],
  templateUrl: './admin-checking-page.component.html',
  styleUrl: './admin-checking-page.component.scss',
})
export class AdminCheckingPageComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  @Output() submitClicked = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<AdminCheckingPageComponent>) {}

  private authUserService = inject(AuthUserService);

  // public loginAsAdmin() {
  //   this.authUserService.loginAsAdmin();
  //   alert('Вы вошли как администратор');
  // }

  public loginAsAdmin(): void {
    this.submitClicked.emit(this.authUserService.loginAsAdmin());
  }

  // public loginAsUser() {
  //   this.authUserService.loginAsUser();
  //   alert('Вы вошли как ползователь');
  // }

  public loginAsUser(): void {
    this.submitClicked.emit(this.authUserService.loginAsUser());
  }

  // public isAdmin(): boolean {
  //   return this.authUserService.getIsAdmin();
  // }

  public isAdmin(): void {
    this.submitClicked.emit(this.authUserService.getIsAdmin());
  }
}
