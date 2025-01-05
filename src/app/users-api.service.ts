import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { combineLatestAll } from "rxjs";

@Injectable({providedIn : 'root'})
export class UsersApiService {
  readonly apiService = inject(HttpClient);
  getUsers() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/users')
  }
}


class test {
  field : number = 2;
  field2 : number = 3;


}

