import { NgFor } from "@angular/common";
import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Todo } from "../../interfaces/todo-interface";
import { TodoCutPipe } from "../../pipes/todo.pipe";
import { EditTodoDialogComponent } from "../../edit-todo/edit-todo-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.scss'],
  standalone: true,
  imports: [NgFor, TodoCutPipe]
})
export class TodosCardComponent {
  @Input()
  todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter();

  @Output()
  editTodo = new EventEmitter();

  readonly dialog = inject(MatDialog);
  readonly snackBar = inject(MatSnackBar);

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: { todo: this.todo },
    });

    dialogRef.afterClosed().subscribe((editResult) => {
      if (editResult) {
        this.editTodo.emit(editResult);
        this.snackBar.open('Задача отредактирована', 'Закрыть', {
          duration: 2000
        });
      } else {
        this.snackBar.open('Отмена редактирования', '', {
          duration: 2000
        });
      }
    });
  }

  onDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}

