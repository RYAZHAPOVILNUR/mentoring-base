import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { Todo } from "../todos-list.component";
import { NgStyle } from "@angular/common";
import { LineTrimPipe } from "../../pipes/line-trim.pipe";

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { invalidCompleted: true }
  }
}

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    NgStyle,
    MatDialogClose,
    LineTrimPipe
  ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTodoDialogComponent {
  readonly data = inject<{todo: Todo}>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditTodoDialogComponent>)

  public focused = false;

  public form = new FormGroup({
    title: new FormControl( this.data.todo.title, [Validators.required, Validators.minLength(3)]),
    userId: new FormControl(this.data.todo.userId,[Validators.required]),
    completed: new FormControl(this.data.todo.completed ? 'да' : 'нет', [Validators.required, completedValidator()])
  })

  private getCompletedValue() {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') {
      return true;
    } else {
      return false;
    }
  }

  submitForm() {
    this.dialogRef.close({...this.form.value, completed: this.getCompletedValue(), id: this.data.todo.id})
  }
}
