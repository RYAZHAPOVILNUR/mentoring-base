import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-admin-checking-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatTooltipModule],
  templateUrl: './admin-checking-page.component.html',
  styleUrl: './admin-checking-page.component.scss',
})
export class AdminCheckingPageComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  login() {
    this.auth.loginAsAdmin();
    console.log(this.auth.loginAsAdmin);
  }

  logout() {
    this.auth.loginAsUser();
    this.router.navigate(['user-status']);
    console.log(this.auth.loginAsUser);
  }
}
