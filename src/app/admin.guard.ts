import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/users-services/user.service';
import { map } from 'rxjs/operators';
import { UserRole} from './interfaces/user-interfaces';

export const AdminGuardFn: CanActivateFn = (_route) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.user$.pipe(
    map((user: { user: UserRole | null }) => (user?.user?.isAdmin? true : (router.navigate(['']), false)))
  );
};