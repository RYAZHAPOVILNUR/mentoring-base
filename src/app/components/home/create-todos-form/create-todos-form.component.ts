import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { completedValidator } from '../users-list/custom-validators';

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
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
