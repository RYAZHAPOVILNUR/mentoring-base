import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { UserService } from "./services/user.service";

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router)
  if (userService.isAdmin) {
    return true;
  } else {
    router.navigate(['users'])
    return false
  }
};
