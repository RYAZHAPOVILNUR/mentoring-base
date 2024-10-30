import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    isAdmin = false;

    constructor() { }

    loginAsAdmin  () {
        this.isAdmin = true;
    }

    loginAsUser () {
        this.isAdmin = false;
    }
}