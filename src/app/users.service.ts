import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInterface } from './interfaces/user-interfaces';

// Паттерн singleton это паттерн проектирования, гарантирующий, что у класса будет только один экземпляр для всего приложения
@Injectable({ providedIn: 'root' })
export class UsersService {
  // private - ограничение доступа и переменная доступна только в этом файле
  // <User[]> это generic, указывающий, что BehaviorSubject будет работать с массивом объектов типа User.
  // переменная со знаком $ говорит что это переменная, которая представляет собой экземпляр BehaviorSubject.
  // BehaviorSubject это один из типов Subject'ов в RxJS (библиотека для реактивного программирования в Angular).
  private usersSubject$ = new BehaviorSubject<UserInterface[]>([]); // [] — начальное значение, переданное в BehaviorSubject. В данном случае это пустой массив

  // можем обратиться к переменной users$ вне файла, использование asObservable()
  // делает так, что другие частикода не могут изменять данные напрямую,
  // что помогает соблюдать инкапсуляцию и правильную логику работы с данными
  public readonly users$ = this.usersSubject$.asObservable();

  //* установка юзеров
  // вместо User[] можем писать Array<User> кому как удобно без разницы
  setUsers(users: UserInterface[]) {
    // next() метод используется для обновления данных в BehaviorSubject.
    this.usersSubject$.next(users);
  }

  //* изменение юзера
  // перезаписывает весь массив при этом элемент который изменили подменяет на новый а все остальные не трогает
  editUser(editedUser: UserInterface) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          // Если это тот юзера, которого нужно отредактировать, заменяем на обновленного юзера
          return editedUser;
        } else {
          // Иначе возвращаем старого юзера без изменений
          return user;
        }
      })
    );
  }

  //* создание юзера
  // перезаписывает на новый массив который равен старому но к нему добавляет новый элемент
  createUser(user: UserInterface) {
    // проверка на одинаковые email
    const existingEmail = this.usersSubject$.value.find(
      (currentElement) => currentElement.email === user.email
    );

    if (existingEmail !== undefined) {
      alert('Такой email уже зарегестрирован!');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      alert('Новый пользователь успешно добавлен!');
      // next перезаписывает данные по новому и возвращает обновленный массив.
      // spread operator ... - это оператор расширения,
      // создает новый массив, который включает все элементы из this.users$
      // и добавляет в конец новый объект user
      
    }
  }

  //* удаление юзера
  // перезаписывает на новый массив который равен старому но там будет удален юзер который мы туда положили
  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter(
        (item) => {
          if (item.id === id) {
            return false;
          } else {
            return true;
          }
        }
        // item => item.id !== id короткая версия if else
      )
    );
  }
}
