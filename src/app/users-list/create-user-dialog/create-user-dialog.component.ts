import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../utils/error-estate-matcher';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDialogClose, MatTooltipModule],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent {
  // бесполезная фигня, мы никакие данные не получаем. Мы же не изменяем уже существующего пользователя 
  // и не удаляем его по id, как мы можем что-то передать, если на момент открытия модалки - его еще не существует. Надеюсь мысль уловил.
  // public readonly data = inject<{ user: CreateUserInterface }>(MAT_DIALOG_DATA);

  readonly dialogRef = inject(MatDialogRef<CreateUserDialogComponent>);
  
  public matcher = new MyErrorStateMatcher();
  
  submitForm() {
    this.dialogRef.close(this.form.value);
  };

  public form = new FormGroup({
    // Validators.pattern("^[a-zA-Zа-яА-я.]*$")
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    website: new FormControl('', [Validators.required, Validators.minLength(3)]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    }),
  });
}
