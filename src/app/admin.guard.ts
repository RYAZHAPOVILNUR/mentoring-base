import { inject } from '@angular/core';
import { CanActivateFn} from '@angular/router';
import { UserService } from './user.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(UserService);
  
  return authService.isAdmin();
};
