import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todos-api.service';

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [],
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosCardComponent {
  @Input() todo!: Todo;

  @Output() deleteTodo = new EventEmitter<number>();

  constructor(private cdr: ChangeDetectorRef) {}

  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
    this.cdr.markForCheck();
  }
}
