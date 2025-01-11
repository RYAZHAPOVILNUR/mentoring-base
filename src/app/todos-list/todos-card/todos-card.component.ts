import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [TruncatePipe],
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosCardComponent {
  @Input() todo!: Todo;

  @Output() deleteTodo = new EventEmitter<number>();

  onDeleteTodo(id: number) {
    this.deleteTodo.emit(id);
  }
}
