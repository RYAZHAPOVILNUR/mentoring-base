import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-create-todos-form',
  standalone: true,
  imports: [ ReactiveFormsModule, FormsModule, NgIf, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule],
  templateUrl: './create-todos-form.component.html',
  styleUrl: './create-todos-form.component.scss'
})
export class CreateTodosFormComponent {

  constructor () {
    this.formTodos.valueChanges.subscribe((formValue) => console.log(formValue))
   }
   
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

 }