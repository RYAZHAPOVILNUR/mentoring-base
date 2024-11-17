import {ActivatedRouteSnapshot, CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../services/user-services/user.service";


// Определяем функцию-охрану (guard), которая реализует интерфейс CanActivateFn для контроля доступа к маршрутам.
export const authGuard: CanActivateFn = (route, state) => {
    const userService: UserService = inject(UserService);
    const router: Router = inject(Router);

    if (userService.isAdmin) {
        return true;
    } else {
        return router.navigate(['users']).then((r: boolean) => false);
    }
}
