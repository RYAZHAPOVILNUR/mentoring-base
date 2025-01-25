import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const userService = inject(UserService);
    if (userService.isAdmin)
  return true;
else {router.navigate([''])
    return false}
}
