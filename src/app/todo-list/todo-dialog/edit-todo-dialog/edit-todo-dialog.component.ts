import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ITodo } from '../../../Interfaces/todo.interface';
import { MatOption } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogClose,
    MatOption,
    MatSelectModule,
  ],
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: ITodo }>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<EditTodoDialogComponent>);

  public readonly form = new FormGroup({
    id: new FormControl(this.data.todo.id),
    userId: new FormControl(this.data.todo.userId, [Validators.required]),
    title: new FormControl(this.data.todo.title, [
      Validators.required,
      Validators.minLength(3),
    ]),
    completed: new FormControl(this.data.todo.completed, [Validators.required]),
  });
  public submitForm(): void {
    this.dialogRef.close(this.form.value);
    console.log('Форма работает', this.form.value);
  }
}
