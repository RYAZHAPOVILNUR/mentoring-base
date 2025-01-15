import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeleteDefisPipe } from '../../../../pipes/deleteDefis';
import { Auth } from '../../../../interfaces/auth.interface';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, DeleteDefisPipe, NgFor, AsyncPipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public auth$: Observable<Auth[]> = this.authService.auth$;

  ngOnInit() {
    const isAuth = localStorage.getItem('auth');
    console.log(isAuth);
    if (isAuth) {
      this.authService.setLocalStorageAuth(JSON.parse(isAuth));
      console.log(isAuth);
    } else {
      this.router.navigate(['/']);
    }
  }
}
