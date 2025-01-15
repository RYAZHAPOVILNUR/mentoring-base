import {
  inject,
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../../services/auth.service';
import { Auth } from '../../../../interfaces/auth.interface';
import { AuthFormComponent } from '../../../forms/auth-form/auth-form.component';
import { AuthBranchComponent } from '../../../notifications/auth-branch/auth-branch.component';
import { Router } from '@angular/router';
import { data } from './auth.config';
import { authData } from './auth.config';

@Component({
    selector: 'app-auth',
    imports: [],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  @Output() showAdminPage = new EventEmitter<boolean>(false);
  @Output() showUserPage = new EventEmitter<boolean>(false);

  public showAuthButton: boolean = true;

  private readonly dialog: MatDialog = inject(MatDialog);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  ngOnInit() {
    const isAuth = localStorage.getItem('auth');
    if (isAuth !== 'null' && isAuth !== null) {
      this.authService.setLocalStorageAuth(JSON.parse(isAuth));
      this.statesShowAuth(
        JSON.parse(isAuth)[0].isAdmin ? this.showAdminPage : this.showUserPage
      );
    }
  }

  loginAsAdmin() {
    this.dialog
      .open(AuthFormComponent, { data })
      .afterClosed()
      .subscribe((admin: Auth) => {
        if (!admin) return;
        this.authService.loginAsAdmin(
          authData(admin, new Date().getTime(), true)
        );
        this.statesShowAuth(this.showAdminPage);
      });
  }

  loginAsUser() {
    this.dialog
      .open(AuthFormComponent, { data })
      .afterClosed()
      .subscribe((user: Auth) => {
        if (!user) return;
        this.authService.loginAsUser(
          authData(user, new Date().getTime(), false)
        );
        this.statesShowAuth(this.showUserPage);
      });
  }

  authModal() {
    if (this.showAuthButton) {
      this.dialog
        .open(AuthBranchComponent)
        .afterClosed()
        .subscribe((isAdmin: boolean | undefined) => {
          if (isAdmin === undefined) return;
          if (isAdmin) {
            this.loginAsAdmin();
          } else {
            this.loginAsUser();
          }
        });
    } else {
      this.authService.exitAuth();
      this.showUserPage.emit(false);
      this.showAdminPage.emit(false);
      this.showAuthButton = true;
      this.router.navigate(['/']);
    }
  }

  statesShowAuth(isPage: EventEmitter<boolean>) {
    isPage.emit(true);
    this.showAuthButton = false;
    this.authService.isAdmin();
  }
}
