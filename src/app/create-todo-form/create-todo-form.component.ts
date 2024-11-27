import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
  if (value === true || value === false) {
        return null;
      } return { invalidCompleted: true };
    }
  }

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    NgIf
  ],
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss'],
})

export class CreateTodoFormComponent {
  @Output() createTodo = new EventEmitter();

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    userId: new FormControl('', [Validators.required]),
    completed: new FormControl('', [Validators.required, completedValidator()])
  });

  private getCompletedValue(): boolean {
    const value = this.form.get('completed')?.value!.trim().toLowerCase();
    if (value === 'да') 
      return true;
    else return false;
}

  public submitForm(): void {
    this.createTodo.emit({...this.form.value, completed: this.getCompletedValue()});
    this.form.reset();
  }
}