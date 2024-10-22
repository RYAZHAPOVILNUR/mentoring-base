import { Component, EventEmitter, inject, Output } from '@angular/core';
import { TodoInterface } from '../../interfaces/todo-interfaces';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatOption, MatLabel, MatSelectModule, MatDialogClose],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {

  readonly data = inject<{ todo: TodoInterface }>(MAT_DIALOG_DATA);


  public form = new FormGroup({
    userId: new FormControl(this.data.todo.userId, [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
    title: new FormControl(this.data.todo.title, [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(this.data.todo.completed, [Validators.required]),
  });

  get userWithUpdatedField() {
    return {
      id: this.data.todo.id,
      ...this.form.value,
    }
  }
}
