import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MAT_DIALOG_DATA, MatDialogClose} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-create-user-dialog',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogClose,
],
  templateUrl: './create-user-dialog.component.html',
  styleUrl: './create-user-dialog.component.scss'
})
export class CreateUserDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  public fb = inject(FormBuilder);

  public form = this.fb.group({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: this.fb.control('', [
      Validators.required,
      Validators.email,
    ]),
    website: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyName: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  createdUser() {
    return {
      ...this.form.value
    }
  }

}
