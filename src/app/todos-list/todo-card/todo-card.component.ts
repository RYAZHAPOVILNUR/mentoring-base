import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { NotificationService } from '../../notification.service';
import { LimiteSymbolsPipe } from '../../pipes/limite-symbols.pipe';
@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
  standalone: true,
  imports: [LimiteSymbolsPipe],
})
export class TodoCardComponent {
  @Input({ required: true })
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  @Output()
  editTodo = new EventEmitter();

  readonly dialog = inject(MatDialog);
  readonly notificationService = inject(NotificationService);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editTodoResult) => {
      console.log('МОДАЛКА ЗАКРЫЛАСЬ, ЗНАЧЕНИЕ ФОРМЫ: ', editTodoResult);
      if (editTodoResult) {
        this.editTodo.emit(editTodoResult);
        this.notificationService.showNotification('Задача отредактирована');
      }
    });
  }

  onDeleteTodo(): void {
    this.deleteTodo.emit(this.todo.id);
    this.notificationService.showNotification('Задача удалена');
  }
}
