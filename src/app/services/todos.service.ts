// import { inject, Injectable } from '@angular/core';
// import { BehaviorSubject } from "rxjs";
// import { MatSnackBar } from "@angular/material/snack-bar";
// import { ITodo } from "../interfaces/interfaces";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class TodosService {
//   private todosSubject$ = new BehaviorSubject<ITodo[]>([]);
//   todos$ = this.todosSubject$.asObservable();
//   private _snackBar = inject(MatSnackBar);
//
//   setTodos(todos: ITodo[]) {
//     this.todosSubject$.next(todos.slice(0,10))
//   }
//
//   editTodo(editedTodo: ITodo) {
//     this.todosSubject$.next(
//       this.todosSubject$.value.map(
//         todo => {
//           if (todo.id === editedTodo.id) {
//             return editedTodo
//           } else {
//             return todo
//           }
//         }
//       )
//     )
//   }
//
//   createTodo(todo: ITodo) {
//     this.todosSubject$.next([...this.todosSubject$.value, todo])
//   }
//
//   deleteTodo(id: number) {
//     this.todosSubject$.next(
//       this.todosSubject$.value.filter(
//         todo => todo.id !== id
//       )
//     )
//   }
//
//   getTodos(): ITodo[] {
//     return this.todosSubject$.value
//   }
// }
