import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../todos-list.interface';
import { NgIf } from '@angular/common';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatError, MatDialogClose, MatTooltipModule, MatOptionModule, MatSelectModule ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss'
})
export class EditTodoDialogComponent {
  readonly data =inject<{ todo: Todo }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditTodoDialogComponent>);
 
  public formTodo = new FormGroup ({
   userId: new FormControl(this.data.todo.userId, [Validators.required]),
   title: new FormControl(this.data.todo.title, [Validators.required, Validators.minLength(10)]),
   completed: new FormControl(this.data.todo.completed),
  });
   
  submitForm() {
    this.dialogRef.close({...this.formTodo.value, id: this.data.todo.id})
    console.log(this.formTodo.value)
  }
}
