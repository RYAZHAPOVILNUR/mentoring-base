import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})  // -- test1
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/users');
  }
}

// class Test1 { -- @Injectable
//   field: number;
//   field2: number;

//   constructor()  {
//     this.field = 10;
//     this.field2 = 20;
//   }
// } 

// const newClassTest1 = new Test1();
// const newClassTest2 = new Test1();
// const newClassTest3 = new Test1();
// const newClassTest4 = new Test1();


// newClassTest1.field;
