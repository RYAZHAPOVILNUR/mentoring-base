import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userServise = inject(UserService);
  const router = inject(Router);

  if (userServise.isAdmin) {
    console.log(userServise.isAdmin);
    return true;
  } else {
    console.log(userServise.isAdmin);
    router.navigate(['/todos']);
    return false;
  }

};
