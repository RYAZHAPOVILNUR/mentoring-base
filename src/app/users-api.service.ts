import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class UserApiService {
    readonly apiService = inject(HttpClient);


    getUsers() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users')
    }
}


// Объяснение разницы между классом и экземпляром класса

// Вот это класс. Аналогия: чертеж машины.
// class Test1 {
//     field1: number = 10;
//     field2: number = 20;

// }


// Вот это экземпляры класса. Их может быть бесконечное множество. Аналогия: реальная физическая машина.
// const newClassTest1 = new Test1;
// const newClassTest2 = new Test1;
// const newClassTest3 = new Test1;
// const newClassTest4 = new Test1;
// const newClassTest5 = new Test1;


// Это, чтобы объяснить, что мы можем обращаться к полям класса только через экземпляры класса.
// При пропытке просто написать название класса и обратиться к его полю, у нас ничего не выйдет. 
// newClassTest1.field1