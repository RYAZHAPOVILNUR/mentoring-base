import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

// Всегда внутри Injectable() в фигурных скобках используем {providedIn: 'root'}
// это говорит что у нас будет один экземпляр класса UsersApiService на все приложение
// и это стандартный дефолтный способ использовать Сервисы.
@Injectable({ providedIn: 'root' })
export class TodoApiService {
  readonly apiService = inject(HttpClient);

  getTodos() {
    return this.apiService.get('https://jsonplaceholder.typicode.com/todos');
    // getTodos() - метод вызывает this.apiService.get(), чтобы отправить HTTP GET-запрос на адрес.
    // Это запрос на URL который получает данные пользователей с базы данных через бэкенд.
  }
}
