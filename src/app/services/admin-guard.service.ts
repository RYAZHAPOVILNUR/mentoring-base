import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserService } from './auth-user.service';

Injectable({ providedIn: 'root' });

export const AdminGuardFn: CanActivateFn = async () => {
  const authUserService = inject(AuthUserService);
  const router = inject(Router);

  const isLoggedIn = authUserService.getIsLoggedIn();
  const isAdmin = authUserService.getIsAdmin();

  function handleGuardLogic() {
    if (isLoggedIn && isAdmin) {
      return true;
    } else {
      if (router.url !== '/login') {
        router.navigate(['/login']);
      }
      return false;
    }
  }

  function handleGuardError() {
    console.error('Error occurred while checking user status');
    if (router.url !== '/login') {
      router.navigate(['/login']);
    }
    return false;
  }

  // In case userService methods can throw errors, you should catch them
  try {
    return handleGuardLogic();
  } catch (error) {
    return handleGuardError();
  }
};
