import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',

})
export class UserService {
  public isAdmin: boolean = false;

  public loginAsAdmin() {
    this.isAdmin = true;
  }

  public loginAsUser() {
    this.isAdmin = false;
  }

  public isItAdmin() {
    return this.isAdmin;
  }
}
