import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from '../todos-list/create-todo-dialog/create-todo-dialog.component';
import { TodoInterface } from '../interfaces/todo-interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';

// Валидатор для поля 'completed'
export function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    return (value === 'yes' || value === 'no') ? null : { invalidCompleted: true };
  };
}

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss']
})
export class CreateTodoFormComponent {
  @Output()
  public createTodo = new EventEmitter<TodoInterface>();

  readonly dialog = inject(MatDialog);

  public snackBar = inject(MatSnackBar)

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe((result: TodoInterface) => {
      if (result) { 
        this.createTodo.emit(result);
        this.snackBar.open('ЗАДАЧА СОЗДАНА!', 'Ok', {
          duration: 5000
        });
      } else {
        this.snackBar.open('ОТМЕНА СОЗДАНИЯ!', 'Ok', {
          duration: 5000
        });
      }
    });
  }
}
