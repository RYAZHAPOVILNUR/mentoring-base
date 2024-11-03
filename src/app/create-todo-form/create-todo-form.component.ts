import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatAnchor
  ],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss'
})
export class CreateTodoFormComponent {

  @Output()
  createTodo = new EventEmitter();

  form = new FormGroup({
    body: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
  })

  onSubmit() {
    this.createTodo.emit(this.form.value)

  }
}
