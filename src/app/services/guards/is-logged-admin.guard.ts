import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export const isLoggedAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService).isAdminLoggedBox$;
  const isAuth = inject(AuthService).isAuthSubject$.value;
  const router = inject(Router);
  const _snackBar = inject(MatSnackBar);

  let isAdmin: boolean = authService;

  const isLocalStorage = localStorage.getItem('auth');
  if (isLocalStorage && isLocalStorage !== 'null') {
    isAdmin = JSON.parse(isLocalStorage)[0].isAdmin;
  }

  const targetRoute = route.url.map((segment) => segment.path).join('/');
  const allowedRoutesForAdmin = ['admin', 'todos', 'users'];
  const allowedRoutesForUser = ['user', 'users', 'todos'];
  const allowedRoutesForGuest = ['todos', 'users'];

  if (isAdmin) {
    return allowedRoutesForAdmin.includes(targetRoute);
  } else if (isAuth && !isAdmin) {
    if (targetRoute === 'admin') {
      router.navigate(['']);
      _snackBar.open('You are not admin', 'Close', { duration: 3000 });
    }
    return allowedRoutesForUser.includes(targetRoute);
  } else {
    if (targetRoute === 'admin') {
      router.navigate(['']);
      _snackBar.open('You are not admin', 'Close', { duration: 3000 });
    } else if (targetRoute === 'user') {
      router.navigate(['']);
      _snackBar.open('You are not user', 'Close', { duration: 3000 });
    }
    return allowedRoutesForGuest.includes(targetRoute);
  }
};
