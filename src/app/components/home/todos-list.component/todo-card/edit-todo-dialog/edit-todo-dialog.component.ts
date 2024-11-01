import { Component, inject } from '@angular/core';
import {  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { completedValidator } from '../../../users-list/custom-validators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [    
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogClose,
    MatTooltipModule
  ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  public fb = inject(FormBuilder);

  public formTodo = this.fb.group({
    title: this.fb.control(this.data.todo.title, [Validators.required, Validators.minLength(4)]),
    userId: this.fb.control(this.data.todo.userId, [Validators.required, Validators.minLength(1)]),
    completed: this.fb.control(this.booleanToString(this.data.todo.completed), [Validators.required, completedValidator()]),
  });

  private booleanToString(value: boolean): string {
    return value ? 'да' : 'нет';
  }

  public getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  get userWithUpdatedFields() {
    return {
      ...this.formTodo.value,
      id: this.data.todo.id,
      completed: this.getCompletedValue(),
    };
  }
}
