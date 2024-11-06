import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interfaces/user.interface";


@Injectable({
  providedIn: 'root',
})
export class UsersApiService {
  http = inject(HttpClient)

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
}
