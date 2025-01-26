import { Todo } from "./todos-list/todos-list.component";
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";



@Injectable({providedIn: 'root'})
export class TodosService {
    todosSubject = new BehaviorSubject<Todo[]>([]);

    setTodos(todos: Todo[]) {
      this.todosSubject.next(todos);
    }

    editTodo(editedTodo: Todo) {
        this.todosSubject.next(
            this.todosSubject.value.map(
                todo => {
                    if (todo.id === editedTodo.id) {
                        return editedTodo
                    } else {
                    return todo
                    }
                }
            )
        )
    }

    createTodo(todo: Todo) {
      const existingTodo = this.todosSubject.value.find(
        currentElement => currentElement.title === todo.title
      );

      if(existingTodo !== undefined) {
        alert('Такая задача уже есть')
      } else {
        this.todosSubject.next([...this.todosSubject.value, todo]);
        alert('Новая задача успешно добавлена')
      }
    }

    deleteTodo(id: number) {
        this.todosSubject.next(
            this.todosSubject.value.filter(
                item => {
                    if (id === item.id) {
                        return false;
                    } else {
                        return true;
                    }
                }
            )
        )
    }
}
