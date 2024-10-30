import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admins-list',
  standalone: true,
  imports: [],
  templateUrl: './admins-list.component.html',
  styleUrl: './admins-list.component.scss'
})
export class AdminsListComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router)

  logout () {
    this.auth.isLoggedIn = false
    this.router.navigate(['']);
  }
}
