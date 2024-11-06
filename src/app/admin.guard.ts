import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/users-services/user.service';
import { map } from 'rxjs/operators';
import { UserRole } from './interfaces/user-interfaces';

export const AdminGuardFn: CanActivateFn = (_route) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.user$.pipe(
    map((user: UserRole | null) => {
      if (user?.isAdmin) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};