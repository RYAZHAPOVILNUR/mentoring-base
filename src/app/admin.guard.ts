import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/users-services/user.service';

Injectable({
  providedIn: 'root',
});
export const AdminGuardFn: CanActivateFn = async () => {
  const userService = inject(UserService);
  const router = inject(Router);

  try {
    const isLoggedIn = userService.getIsLoggedIn();
    const isAdmin = userService.getIsAdmin();

    if (isLoggedIn && isAdmin) {
      return true;
    } else {
      if (router.url !== '/login') {
        router.navigate(['/login']);
      }
      return false;
    }
  } catch (error) {
    console.error(error);
    if (router.url !== '/login') {
      router.navigate(['/login']);
    }
    return false;
  }
};