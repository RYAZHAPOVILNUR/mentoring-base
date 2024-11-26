import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss'
})
export class CreateTodosFormComponent {

  @Output()
  createTodos = new EventEmitter();
 
  public formTodos = new FormGroup ({
   userId: new FormControl('', [Validators.required]),
   title: new FormControl('', [Validators.required, Validators.minLength(10)]),
   completed: new FormControl('', [Validators.required, Validators.pattern(/^(да|нет)$/i)]),
  });
 
  public sumbitForm(): void {
    const completedValue = this.formTodos.controls['completed']?.value;

    if (completedValue !== null && completedValue !== undefined) {
      const isCompleted = completedValue.toLowerCase() === 'да';
      
      const formValue = { ...this.formTodos.value, completed: isCompleted };

      if (this.formTodos.valid) {
        this.createTodos.emit(formValue);

        this.formTodos.reset({ completed: '' });
      } else {
        console.log('Form is invalid');
      }
      } else {
      console.log('Completed field is null or undefined');
      }
    }
 
  constructor () {
   this.formTodos.valueChanges.subscribe((formValue) => console.log(formValue))
  }
 }