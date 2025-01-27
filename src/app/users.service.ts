import { Injectable } from "@angular/core";
import { User } from "./users-list/users-list.component";

@Injectable({providedIn: 'root'})
export class UsersService {
    users: User[] = [];

    setUsers(users: User[]) {
        this.users = users;
    }

    editUser(editedUser: User) {
        this.users = this.users.map(
            item => item.id === editedUser.id ? editedUser : item
        )
    }

    createUser(user: User) {
        this.users = [...this.users, user] //три точки это rest оператор, который позволяет добавлять в массив users нового созданного user.
        // this.users = this.users.concat([user]); Метод concat объединяет два массива в один: [users] + [user] = [users, user]. Это просто второй способ добавлять в массив какой-то новый элемент (перезаписывать его!!).
        // this.users.push(user); Так неправильно делать, потому что этот способ мутирует массив (изменяет его), но не перезаписывает. 
        // А нам надо, чтобы он перезаписывался.
        // Это влияет на скорость работы приложения (разговор про changeDetection) 
        // и фиксирование изменений (то есть ангуляр не будет видить, что мы что-то изменили в массиве (разговор про реактивность, а также про ссылки)
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            item => item.id === id ? false : true
        )
    }
}