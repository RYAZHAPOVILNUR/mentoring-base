import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../todos-list/todos-list.interface';

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ ReactiveFormsModule, NgIf,],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss'
})
export class CreateTodosFormComponent {
  @Output()
  createTodos = new EventEmitter();
 
  public formTodos = new FormGroup ({
   title: new FormControl('', [Validators.required, Validators.minLength(2)]),
   userId: new FormControl('', [Validators.required]),
   completed: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });
 
  public sumbitForm(): void {
   this.createTodos.emit(this.formTodos.value);
   this.formTodos.reset();
  }
 
  constructor () {
   this.formTodos.valueChanges.subscribe((formValue) => console.log(formValue))
  }
}

