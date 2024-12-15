import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { map } from "rxjs";
import { UserService } from "../user.service";


export const isAdminFn: CanActivateFn = () => {
    const router = inject(Router)
    const userService = inject(UserService)
    if (userService.isAdmin()) {
        console.log('guard пропустил')
        return true
    } else {
        router.navigate([''])
        console.log('guard не пропустил')
        return false

    }
}