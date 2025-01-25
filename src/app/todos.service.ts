import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Todo } from "./todos.interface";

@Injectable({providedIn: 'root'})

export class TodosService implements OnInit {
	todosSubject = new BehaviorSubject<Todo[]>([]);
	todos = this.todosSubject.asObservable();
	
	setTodos(todos: Todo[]) {
		this.todosSubject.next(todos);
	}
	
	editTodo(editedTodo: Todo) {
		this.todosSubject.value.map(
			todo => {
				if (todo.id === editedTodo.id) {
					return editedTodo
				} else {
					return todo
				}
			}
		)
	}
	
	createTodo(todo: Todo) {
		const existingTodo = this.todosSubject.value.find(
			(currentElement) => currentElement.title === todo.title
		);
		
		if (existingTodo !== undefined) {
			alert('Такая задача уже существует!');
		} else {
			this.todosSubject.next([todo, ...this.todosSubject.value])
			alert('Задача успешно добавлена!')
		}
	}
	
	deleteTodo(id: number) {
		this.todosSubject.next(
			this.todosSubject.value.filter(
				item => {
					if (id === item.id) {
						return false
					} else {
						return true;
					}
				}
			)
		)
	}
	
	ngOnInit(): void {
		
	}
}