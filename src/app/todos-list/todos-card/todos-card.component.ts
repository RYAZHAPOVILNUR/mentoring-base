import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todos.interface';

@Component({
	selector: 'app-todos-card',
	standalone: true,
	imports: [],
	templateUrl: './todos-card.component.html',
	styleUrl: './todos-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodosCardComponent {
	@Input()
	todo!: Todo;
	
	@Output()
	deleteTodo = new EventEmitter();
	
	onDeleteTodo(todoId: number) {
		this.deleteTodo.emit(todoId);
	}
}
