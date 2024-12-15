import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Todo } from '../todos-list/todos-list.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss'
})
export class CreateTodosFormComponent {
  readonly data =inject<{ todo: Todo }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<CreateTodosFormComponent>);

  public formTodo = new FormGroup ({
   userId: new FormControl('', [Validators.required]),
   title: new FormControl('', [Validators.required, Validators.minLength(10)]),
   completed: new FormControl(false),
  });
 
  onSubmit() {
    this.dialogRef.close(this.formTodo.value)
  };

 }