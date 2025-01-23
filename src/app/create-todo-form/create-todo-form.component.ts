import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../Material.module';

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './create-todo-form.component.html',
  styleUrl: './create-todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoFormComponent {
  @Output() createTodo = new EventEmitter();

  createTodoForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl(true, [Validators.required]),
  });

  submitForm() {
    const userId = Date.now();
    const userData = { ...this.createTodoForm.value, id: userId };
    this.createTodo.emit(userData);
    this.createTodoForm.reset();
  }
}
