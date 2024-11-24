// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from "rxjs";
// import { IUser } from "../interfaces/interfaces";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {
//   private usersSubject$ = new BehaviorSubject<IUser[]>([]);
//   users$ = this.usersSubject$.asObservable()
//
//   setUsers(users: IUser[]) {
//     this.usersSubject$.next(users)
//   }
//
//   editUsers(editUser: IUser) {
//     this.usersSubject$.next(
//       this.usersSubject$.value.map(
//         user => {
//           if (user.id === editUser.id) {
//             return editUser
//           } else {
//             return user
//           }
//         }
//       )
//     )
//   }
//
//   createUser(user: IUser) {
//       this.usersSubject$.next([...this.usersSubject$.value, user])
//   }
//
//   deleteUser(id: number) {
//     this.usersSubject$.next(
//       this.usersSubject$.value.filter(
//         user => user.id !== id
//       )
//     )
//   }
// }
