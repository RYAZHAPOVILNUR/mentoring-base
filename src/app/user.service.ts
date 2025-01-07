import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private user: {username: string; role: string} = {
        username: 'admin',
        role: 'admin',
    };

    loginAsAdmin()  {
        this.user.role = 'admin',
        this.user.username = 'admin'
    }

    loginAsUser()  {
        this.user.role = 'user',
        this.user.username = 'user'
    }

    isAdmin() {
        if (this.user.role === 'admin') {
            return true
        } else {
            return false
        }
    }

};

