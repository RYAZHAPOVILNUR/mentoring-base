import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',

})
export class UserService {
  isAdmin: boolean = false;

  loginAsAdmin() {
    this.isAdmin = true;
  }

  loginAsUser() {
    this.isAdmin = false;
  }
  isItAdmin() {
    return this.isAdmin;
  }
}
