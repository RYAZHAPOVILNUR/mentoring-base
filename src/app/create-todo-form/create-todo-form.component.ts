import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Валидатор для поля 'completed' - только "yes" или "no"
export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();

    if (value === 'да' || value === 'нет') {
      return null; // Валидное значение
    }

    return { invalidCompleted: true }; // Невалидное значение
  };
}


@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
  @Output()
  createTodoForm = new EventEmitter();

  public form = new FormGroup({
    // Validators.pattern("^[0-9]*$") ожидает только цифры
    userId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
    id: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z.,]*$")]),
    completed: new FormControl('', [Validators.required, completedValidator(), Validators.pattern("^[a-zA-Z]*$")]),
  });

  // Метод для получения значения completed
  private getCompletedValue(): boolean {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    return value === 'yes'; // true для "yes", false для "no"
  }

  public submitFormTodo(): void {
    const formData = {
      ...this.form.value,
      completed: this.getCompletedValue() // Устанавливаем boolean значение
    };

    this.createTodoForm.emit(formData); // Отправляем данные формы
    this.form.reset(); // Сбрасываем форму
  }
}

// Input - от родительского к дочернему
// Output - от дочернего к родительскому
