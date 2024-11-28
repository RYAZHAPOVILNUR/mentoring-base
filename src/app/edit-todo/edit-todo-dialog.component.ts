import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTooltipModule } from '@angular/material/tooltip';
import { completedValidator } from "../create-todo-form/create-todo-form.component";
import { MatSelectModule } from '@angular/material/select';
import { Todo } from "../interfaces/todo-interface";

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  standalone: true,
  imports: [MatSelectModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, NgIf, MatDialogModule, MatTooltipModule]
})
export class EditTodoDialogComponent {
  readonly data = inject<{ todo: Todo }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditTodoDialogComponent>);
  readonly snackBar = inject(MatSnackBar);

  public form = new FormGroup({
    title: new FormControl(this.data.todo.title, [Validators.required, Validators.minLength(4)]),
    userId: new FormControl(this.data.todo.userId, [Validators.required]),
    completed: new FormControl(this.data.todo.completed, [Validators.required, completedValidator()]),
  });
  
  public submitForm() {
   this.dialogRef.close({...this.form.value, id: this.data.todo.id});
  }
}