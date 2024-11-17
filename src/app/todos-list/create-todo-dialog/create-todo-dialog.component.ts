import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatAnchor,
    MatIcon,
    MatCheckbox
  ],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss'
})
export class CreateTodoDialogComponent {
  @Output()
  public createTodo = new EventEmitter();

  public form = new FormGroup({
    body: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    title: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]),
    completed: new FormControl(false, [Validators.required]),
  })

  public onSubmit() {
    this.createTodo.emit(this.form.value)
  }
}
