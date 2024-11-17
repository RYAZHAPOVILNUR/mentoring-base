import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserInterface} from '../../interfaces/user-interfaces';


@Injectable({providedIn: 'root'}) // Паттерн singleton это паттерн проектирования, гарантирующий, что у класса будет только один экземпляр для всего приложения.
export class UsersService {
    private usersSubject$: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>([]); // [] — начальное значение пустой массив, переданное в BehaviorSubject.
    public readonly users$: Observable<UserInterface[]> = this.usersSubject$.asObservable(); // Делаем users$ не изменяемым и только для чтения в глобальной области видимости с помощью asObservable().

    //* установка юзеров
    // вместо User[] можем писать Array<User> кому как удобно без разницы
    public setUsers(users: UserInterface[]): void {
        this.usersSubject$.next(users);  // next() метод используется для обновления данных в BehaviorSubject.
    }

    public getUser(): UserInterface[] {
        return this.usersSubject$.value;
    }

    //* изменение юзера
    // перезаписывает весь массив при этом элемент который изменили его подменяет на новый, а все остальные не трогает.
    public editUser(editedUser: UserInterface): void {
        this.usersSubject$.next(
            this.usersSubject$.value.map((user: UserInterface) => {
                if (user.id === editedUser.id) { // Если это тот юзера, которого нужно отредактировать, заменяем на обновленного юзера
                    return editedUser;
                } else {
                    return user; // Иначе возвращаем старого юзера без изменений
                }
            })
        );
    }

    //* создание юзера
    // перезаписывает на новый массив который равен старому, но к нему добавляет новый элемент
    public createUser(user: UserInterface): void {
        const existingEmail: UserInterface | undefined = this.usersSubject$.value.find(
            (currentElement: UserInterface) => currentElement.email === user.email // проверка на одинаковые email
        );

        if (existingEmail !== undefined) {
            alert('Такой email уже зарегистрирован!');
        } else {
            this.usersSubject$.next([...this.usersSubject$.value, user]);
            alert('Новый пользователь успешно добавлен!');
            // spread создает новый массив, который включает все элементы из this.users$ и добавляет в конец новый объект user.
            // И так ...rest используется для сбора оставшихся элементов, а ...spread используется для раскрытия элементов.
        }
    }

    //* удаление юзера
    // перезаписывает на новый массив который равен старому но там будет удален юзер который мы туда положили.
    public deleteUser(id: number): void {
        this.usersSubject$.next(
            this.usersSubject$.value.filter(
                (item: UserInterface) => item.id !== id //короткая версия if else
                // (item) => {
                //     if (item.id === id) {
                //         return false;
                //     } else {
                //         return true;
                //     }
                // }
            )
        );
    }
}
