import {Component, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})

export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    title: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  public submitForm(): void {

    this.createTodo.emit(this.form.value);
    this.form.reset();
  }
}
