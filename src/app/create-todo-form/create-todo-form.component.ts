import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatFormFieldModule, MatLabel, MatInputModule, MatInput, MatButtonModule, MatDividerModule, MatCheckboxModule  ],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {
  
  @Output()

  createTodo = new EventEmitter()
  
  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl(false, [Validators.requiredTrue])
  })
  public submitTodoForm(): void {
    this.createTodo.emit(this.form.value)
    this.form.reset()
    console.log(this.form.value)
    
  }
}
