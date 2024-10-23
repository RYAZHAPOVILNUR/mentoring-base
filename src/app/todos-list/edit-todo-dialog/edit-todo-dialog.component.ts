import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ITodo } from '../../interfaces/todo.interface';
import {
  customNumberValidator,
  customYesNoValidator,
} from '../../custom-validators/custom-validators';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogClose,
  ],
  standalone: true,
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: ITodo }>(MAT_DIALOG_DATA);

  public editTodoForm = new FormGroup({
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(3),
    ]),
    userId: new FormControl(this.data.todo.userId, [
      Validators.required,
      Validators.minLength(1),
      Validators.min(1),
      customNumberValidator,
    ]),
    completed: new FormControl(this.data.todo.completed ? 'Да' : 'Нет', [
      Validators.required,
      customYesNoValidator,
    ]),
  });

  public getTodoCompletedValue(): boolean {
    const enteredValue = this.editTodoForm
      .get('completed')
      ?.value!.trim()
      .toLowerCase();

    if (enteredValue === 'да') {
      return true;
    }
    return false;
  }

  get todoWithUpdatedFields() {
    return {
      ...this.editTodoForm.value,
      completed: this.getTodoCompletedValue(),
      id: this.data.todo.id,
    };
  }
}
