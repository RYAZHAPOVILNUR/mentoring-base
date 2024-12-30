import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatDialogClose,
  ],
})
export class EditUserDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  form = new FormGroup({
    name: new FormControl(this.data.userCard.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    company: new FormControl(this.data.userCard.company.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(this.data.userCard.email, [
      Validators.required,
      Validators.email,
    ]),
    website: new FormControl(this.data.userCard.website, [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get userWithUpdateFields() {
    return {
        ...this.form.value,
        id: this.data.userCard.id
    }
  }

}
