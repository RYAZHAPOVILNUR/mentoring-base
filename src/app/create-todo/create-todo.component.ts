import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

export function completedValidator(control: AbstractControl): ValidationErrors | null {
  const validValues = ['да' , 'нет']
  return validValues.includes(control.value.trim().toLowerCase()) ? null : { invalidValue: true };
}

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    userID: new FormControl('', [Validators.required]),
    completed: new FormControl('', [Validators.required, completedValidator])
  });

  private getCompletedVal():boolean {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') return true;
    else return false
  }

  submitForm() {
    this.createTodo.emit({...this.form.value, completed: this.getCompletedVal()});
    console.log(this.form.value)
  }
}
