import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/users-services/user.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const AdminGuardFn: CanActivateFn = (_route) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.userSubject$.pipe( 
    map((user) => {
      if (user && user.isAdmin) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['']);
      return of(false);
    })
  );
};