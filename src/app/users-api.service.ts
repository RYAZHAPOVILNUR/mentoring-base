import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

// Всегда когда создаем Сервис внутри Injectable() в фигурных скобках используем {providedIn: 'root'}
// это говорит что у нас будет один экземпляр класса UsersApiService на все приложение
// и это стандартный дефолтный способ использовать Сервисы.
// Добавление кода providedIn: 'root' он избавляет от ошибки No provider for UsersApiService!
@Injectable({ providedIn: 'root' })
export class UsersApiService {

    // используем inject, чтобы внедрить HttpClient в класс UsersApiService
    readonly apiService = inject(HttpClient);

    // getUsers() методе вызывается this.apiService.get(), чтобы
    // отправить HTTP GET-запрос на адрес https://jsonplaceholder.typicode.com/users.
    // Это запрос на URL который получает данные пользователей с базы данных через бэкенд.
    getUsers() {
        return this.apiService.get('https://jsonplaceholder.typicode.com/users');
    }
}