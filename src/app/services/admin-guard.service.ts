import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthUserService } from './auth-user.service';
import { map } from 'rxjs';

Injectable({ providedIn: 'root' });

export const AdminGuardFn: CanActivateFn = () => {
  const authUserService = inject(AuthUserService);
  const router = inject(Router);

  if (authUserService.isAdmin) {
    console.log(authUserService.isAdmin);
    return true;
  }
  console.log(authUserService.isAdmin);
  router.navigate(['']);
  return false;
};