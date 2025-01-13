import { Injectable } from "@angular/core";

interface User {
    isAdmin: boolean,
}

@Injectable({providedIn: "root"})

export class UserService {
    private currentUser: User | null = null

    loginAsAdmin():void {
        this.currentUser = {
            isAdmin: true
        }
    }
    
    loginAsUser(): void {
        this.currentUser = {
            isAdmin: false
        }
    }

    logout(): void {
        this.currentUser = null
    }

    isAdmin(): boolean {
        return !!this.currentUser?.isAdmin;
    }
}