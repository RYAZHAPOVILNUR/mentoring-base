import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user.service";

export const AdminGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const userService = inject(UserService)
    const router = inject(Router)

    if(userService.isAdmin()) {
        return true
    }

    return router.createUrlTree([""],
        // {
        //     queryParams: {
        //       returnUrl: state.url,  // сохраняем URL, куда пытались попасть
        //       message: 'Для доступа требуются права администратора'  // сообщение для пользователя
        //     }
        //   }
    )
}