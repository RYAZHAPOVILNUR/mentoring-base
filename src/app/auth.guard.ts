import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = Inject(UserService);
  const router = Inject(Router)

  if (userService.isAdmin) {
    return true;
  }  
  else {
    alert('У вас не достаточно прав')
    return false;    
  }
};
