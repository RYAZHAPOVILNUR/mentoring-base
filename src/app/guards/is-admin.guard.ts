import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../user.service";
// import { map } from 'rxjs';

//export const authGuard
export const isAdminFn: CanActivateFn = (route, state) => {

    const userService = inject(UserService);
    const router = inject(Router)

    if (userService.isAdmin) {
        // router.navigate(['admin']);
        console.log(userService.isAdmin)
        return true;
    } else {
        console.log(userService.isAdmin)
        router.navigate([''])
        return false;
    }


    // if (userService.isAdmin) {
    //     return true
    // }

    // public logout() {
    //     this.userService.logout();
    //     this.router.navigate(['']);
    // }

    // return userService.user$.pipe(
    //     map((user) => {
    //         if (userService.isAdmin) {
    //             return true;
    //             // router.navigate(['admin']);
    //         } else {
    //             router.navigate(['todos']);
    //             return false;
    //         }
    //     })
    // )
}
