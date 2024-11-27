import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserRole } from "../interfaces/users-interface";
import { AuthService } from "../services/authentication.service";

export const isAdminGuard: CanActivateFn = (route, state) => {
  const usersService = inject(AuthService);
  const router = inject(Router);

  return AuthService.user$.pipe(
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