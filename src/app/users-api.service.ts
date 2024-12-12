import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsersApiService {
  readonly apiservise = inject(HttpClient);
  getUsers() {
    return this.apiservise.get('https://jsonplaceholder.typicode.com/users');
  }
}


class Test1 {
  field: number;
  field2: number;  

  constructor() {
    this.field = 10;
    this.field2 = 20;
  }
}

const newClassTest1 = new Test1();