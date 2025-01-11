import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  }
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  private apiService = inject(HttpClient)

  usersList: User[] = []
  transformedUsers: { id: number; username: string; }[] = []
  constructor() {
    this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(users => {
      this.usersList = users;

      // 1. Преобразовать данные: оставить только id и username
      this.transformedUsers = users.map(user => ({
        id: user.id,
        username: user.username
      }));

      // 2. Список всех email
      const emails = users.map(user => user.email)
      console.log("🚀 ~ UserListComponent ~ constructor ~ emails:", emails)

      // 3. Пользователь с id === 9
      const userId9 = users.filter(user => user.id === 9)
      console.log("🚀 ~ UserListComponent ~ constructor ~ userId9:", userId9)
    
      // 4. Пользователи из города 'Lebsackbury'
      const userSity = users.filter(user => user.address.city === 'Lebsackbury')
      console.log("🚀 ~ UserListComponent ~ constructor ~ userSity:", userSity)

      // 5. Первые 5 пользователей
      const firstFiveUsers = users.slice(0,5)
      console.log("🚀 ~ UserListComponent ~ constructor ~ firstFiveUsers:", firstFiveUsers)

      // 6. Все пользователи в обратном порядке
      const reversedUsers  = [...users].reverse()
      console.log("🚀 ~ UserListComponent ~ constructor ~ reversedUsers:", reversedUsers)

      // 7. Количество пользователей
      const usersCount = users.length
      console.log("🚀 ~ UserListComponent ~ constructor ~ lenghtUsers:", usersCount)
      
      // 8. Список вебсайтов, содержащих '.com'
      const usersWebsite = users.filter(user => user.website.includes('.com')).map(user => user.website)
      console.log("🚀 ~ UserListComponent ~ constructor ~ usersWebsite:", usersWebsite)
      
      // 9. Username длиннее 12 символов
      const userUesrname = users.filter(user => user.username.length > 12).map(user => user.username)
      console.log("🚀 ~ UserListComponent ~ constructor ~ userUesrname:", userUesrname)

      // 10. Список всех username в нижнем регистре
      const lowercaseUsernames  = users.map(user => user.username.toLowerCase())
      console.log("🚀 ~ UserListComponent ~ constructor ~ lowercaseUsernames:", lowercaseUsernames)
    })
  }

  deleteUser(id: number){
    this.usersList = [...this.usersList.filter(user => user.id !== id)]
  }
}
