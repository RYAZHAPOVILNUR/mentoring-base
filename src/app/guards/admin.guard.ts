import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivateFn } from '@angular/router';
import { UsersService } from "../users.service";
import { map } from 'rxjs/operators';
import { UserRole } from "../interfaces/users-interface";

export const isAdminGuard: CanActivateFn = (route, state) => {
  const usersService = inject(UsersService);
  const router = inject(Router);

  return usersService.user$.pipe(
    map((user: UserRole | null) => {
      if (user?.isAdmin) {
        return true;
      } else {
        router.navigate(['']);
        return false;
      }
    })
  );
};