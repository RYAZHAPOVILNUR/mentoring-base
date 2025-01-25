import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NotificationService } from '../notification.service';

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
  templateUrl: './Create-todo-form.component.html',
  styleUrl: './Create-todo-form.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  standalone: true,
})
export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  readonly notificationService = inject(NotificationService);

  public formTodo = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userId: new FormControl('', [Validators.required]),
    completed: new FormControl('', [Validators.required, completedValidator()]),
  });

  private getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false;
  }

  public SubmitForm(): void {
    this.createTodo.emit({
      ...this.formTodo.value,
      completed: this.getCompletedValue(),
    });
    this.formTodo.reset();
    this.notificationService.showNotification('Задача добавлена');
  }
}
