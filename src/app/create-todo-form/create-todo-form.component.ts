import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

// Валидатор для поля 'completed' - только "yes" или "no"
export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();

    if (value === 'yes' || value === 'no') {
      return null; // Валидное значение
    }

    return { invalidCompleted: true }; // Невалидное значение
  };
}


@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
  @Output()
  createTodoForm = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Zа-яА-я.,]*$")]),
    id: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Zа-яА-я.,]*$")]),
    completed: new FormControl('',[Validators.required, Validators.maxLength(3)]),
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
