import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './servises/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isAdmin) {
    return true;
  } else {
    console.log(userService.isAdmin)
    router.navigate(['/todos'])
    return false;
  }
};
