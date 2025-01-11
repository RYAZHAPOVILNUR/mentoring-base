import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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
	todo: any
	
	@Output()
	deleteTodo = new EventEmitter()
	
	onDeleteTodo(todoId: number) {
		this.deleteTodo.emit(todoId)
	}
}
