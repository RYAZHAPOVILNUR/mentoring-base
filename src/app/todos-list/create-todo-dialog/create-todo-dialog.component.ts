import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { completedValidator } from '../../create-todo-form/create-todo-form.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-create-todo-dialog',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule,MatInputModule,MatButtonModule, ReactiveFormsModule, MatOption, MatLabel, MatSelectModule, MatDialogClose],
  templateUrl: './create-todo-dialog.component.html',
  styleUrl: './create-todo-dialog.component.scss'
})
export class CreateTodoDialogComponent {

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("^[0-9]*$")]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('', [Validators.required]),
  });
  
  

  // private getCompletedValue(): boolean {
  //   const value = this.form.get('completed')?.value!.trim().toLowerCase();
  //   return value === 'yes';
  // }

  // public submitFormTodo(): void {
  //   const formData = { ...this.form.value, completed: this.getCompletedValue() };
  //   this.createTodoForm.emit(formData);
  //   this.form.reset();
  // }
}
