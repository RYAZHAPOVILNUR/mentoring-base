import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { User } from '../../../interfaces/user-interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  templateUrl: 'edit-user-dialog.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogClose,
    MatTooltipModule,
  ],
})
export class EditUserDialogComponent {
  readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

  form = new FormGroup({
    name: new FormControl(this.data.user.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(this.data.user.email, [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl(this.data.user.phone, [
      Validators.required,
      Validators.minLength(10),
    ]),
    website: new FormControl(this.data.user.website, [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name: new FormControl(this.data.user.company.name, [
        Validators.required,
        Validators.minLength(2),
      ]),
    }),
  });

  submitForm() {
    this.dialogRef.close({
      ...this.form.value,
      id: this.data.user.id,
    });
  }
}