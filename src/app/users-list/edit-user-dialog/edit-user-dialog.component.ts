import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: 'edit-user-dialog.component.html',
  styleUrl: 'edit-user-dialog.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatDialogClose,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  standalone: true,
})
export class EditUserDialogComponent {
  readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    name: new FormControl(this.data.user.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(this.data.user.email, [
      Validators.required,
      Validators.email,
    ]),
    website: new FormControl(this.data.user.website, [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyName: new FormControl(this.data.user.company.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  get userWithUpdatedFields() {
    return {
      ...this.form.value,
      id: this.data.user.id,
    };
  }
}
