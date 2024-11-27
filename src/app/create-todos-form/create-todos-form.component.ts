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
   completed: new FormControl(false),
  });
 
  public submitForm(): void {
    this.createTodos.emit(this.formTodos.value);
    this.formTodos.reset();
   }
 
  constructor () {
   this.formTodos.valueChanges.subscribe((formValue) => console.log(formValue))
  }
 }