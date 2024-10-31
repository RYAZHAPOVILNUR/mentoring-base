import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./users-list/users-list.component";

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient)
  getData(): Observable<User[]> {
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users")
  }
}
