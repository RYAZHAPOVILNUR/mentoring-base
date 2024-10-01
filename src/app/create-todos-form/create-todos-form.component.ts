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

export function completeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowercase();
    if(value === 'да' || value === 'нет') {
      return null;
    } 
    return {returnInvalid: true};
  };
}

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss',
})
export class CreateTodosFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public fb = inject(FormBuilder);

  public formTodo = this.fb.group({
    title: this.fb.control('', [Validators.required, Validators.minLength(7)]),
    userId: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    completed: this.fb.control('', [
      Validators.required,
      completeValidator,
    ]),
  });

  public getCompletedValue(): boolean {
    const value = this.formTodo.get('completed')?.value!.trim().toLowerCase();
    if(value === 'да') 
      return true;
    else return false;
  }

  public submitTodo(): void {
    this.createTodo.emit({...this.formTodo.value, completed: this.getCompletedValue});
    console.log(this.formTodo.invalid);
  }
}
