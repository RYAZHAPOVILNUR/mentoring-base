import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { returnInvalid: true };
  };
}

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss',
})
export class CreateTodosFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public fb = inject(FormBuilder);

  public formTodo = this.fb.group({
    title: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    userId: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    completed: this.fb.control('', [Validators.required, completedValidator()]),
  });

  public getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  public submitTodo(): void {
    this.createTodo.emit({
      ...this.formTodo.value,
      completed: this.getCompletedValue(),
    });
    console.log(this.formTodo.invalid);
  }
}
