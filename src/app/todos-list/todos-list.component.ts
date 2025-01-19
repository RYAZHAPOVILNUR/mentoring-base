import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosCardComponent } from './todos-card/todos-card.component';
import { TodosService } from '../todos.service';
import { Observable } from 'rxjs';
import { Todo } from '../todos.interface';
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form.component";

@Component({
	selector: 'app-todos-list',
	standalone: true,
	imports: [NgFor, TodosCardComponent, AsyncPipe, CreateTodoFormComponent],
	templateUrl: './todos-list.component.html',
	styleUrl: './todos-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {
	readonly todosApiService = inject(TodosApiService);
	readonly todosService = inject(TodosService)
	
	todos$: Observable<Todo[]>;
	constructor() {
		this.todos$ = this.todosService.todosSubject;
		this.todosApiService.getTodos().subscribe(
			(response: Todo[]) => {
				this.todosService.setTodos(response);
			}
		)
	}

	public deleteTodos(id: number) {
		this.todosService.deleteTodo(id)
	}
	
	public createTodo(formItem: Todo) {
		this.todosService.createTodo({
			id: new Date().getTime(),
			title: formItem.title,
			userId: formItem.userId,
			completed: formItem.completed,
		})
	}
}
