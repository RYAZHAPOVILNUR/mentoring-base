import { inject } from '@angular/core';
import { AuthService } from './auth-user.service';
import { Router } from '@angular/router';

export const authGuardFn = () => {
  const auth = inject(AuthService);
  if (auth.isAdmin) {
    return true;
  }
  return false;
};
