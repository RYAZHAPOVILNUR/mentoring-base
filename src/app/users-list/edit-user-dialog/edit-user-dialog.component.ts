import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    MatDialogClose,
  ],
  standalone: true,
})
export class EditUserDialogComponent {
  readonly data = inject<{ user: IUser }>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    name: new FormControl(this.data.user.name, [
      Validators.required,
      Validators.minLength(3),
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
    return { ...this.form.value, id: this.data.user.id };
  }
}
