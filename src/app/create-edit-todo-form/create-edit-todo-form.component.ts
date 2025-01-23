import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaterialModule } from '../Material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../interfaces/todos.interface';

@Component({
  selector: 'app-create-edit-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './create-edit-todo-form.component.html',
  styleUrl: './create-edit-todo-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEditTodoFormComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<CreateEditTodoFormComponent>);
  readonly data = inject<Todo>(MAT_DIALOG_DATA);
  @Output() createTodo = new EventEmitter();

  ngOnInit(): void {
    if (this.data) {
      this.createEditTodoForm.patchValue(this.data);
    }
  }

  createEditTodoForm = new FormGroup({
    id: new FormControl(this.data?.id || null),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    userId: new FormControl('', [Validators.required, Validators.minLength(2)]),
    completed: new FormControl(true, [Validators.required]),
  });

  submitForm() {
    const userId = Date.now();
    const userData = { ...this.createEditTodoForm.value, id: userId };
    this.createTodo.emit(userData);
    this.dialogRef.close(this.createEditTodoForm.value);
  }
}
