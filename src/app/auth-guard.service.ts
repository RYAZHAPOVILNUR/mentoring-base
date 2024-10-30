import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { CurrentUserService } from './currentUser.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService {
  currentUserService = inject(CurrentUserService);
  router = inject(Router);
  canActivate(): Observable<boolean> {
    return this.currentUserService.currentUser$.pipe(
      filter((currentUser) => currentUser !== undefined),
      map((currentUser) => {
        if (!currentUser) {
          this.router.navigateByUrl('/');
          return false;
        }
        return true;
      })
    );
  }
}
