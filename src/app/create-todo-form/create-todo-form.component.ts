import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input' ;
import {MatFormFieldModule} from '@angular/material/form-field' ;

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoFormComponent {
  @Output() createTodo = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('')
  });

  public submitForm(): void {
    this.createTodo.emit(this.form.value);
    this.form.reset();
  }
}
