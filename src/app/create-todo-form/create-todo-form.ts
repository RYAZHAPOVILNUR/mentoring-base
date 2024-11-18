import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { invalidCompleted: true };
  };
}

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.html',
  styleUrl: './create-todo-form.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('', [Validators.required, completedValidator()]),
  });

  private getComputedValue(): boolean {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  public submitForm(): void {
    this.createTodo.emit({
      ...this.form.value,
      completed: this.getComputedValue(),
    });
    this.form.reset();
  }
}
