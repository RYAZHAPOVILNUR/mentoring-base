import {Component, EventEmitter, Output} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormField, MatIconModule,]
})

export class CreateTodoFormComponent {
  @Output()
  createTodo = new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]{1,3}$')]),
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  public submitForm(): void {

    this.createTodo.emit(this.form.value);
    this.form.reset();
  }
}
