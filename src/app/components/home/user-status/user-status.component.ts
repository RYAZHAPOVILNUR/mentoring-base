import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-user.service';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.scss',
})
export class UserStatusComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  logout() {
    this.auth.isAdmin = false;
    this.router.navigate(['']);
  }
}
