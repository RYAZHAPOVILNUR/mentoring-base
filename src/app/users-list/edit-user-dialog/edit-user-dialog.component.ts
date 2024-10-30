import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogClose,
    MatTooltipModule,
  ],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
})
export class EditUserDialogComponent {
  readonly data = inject(MAT_DIALOG_DATA);

  public fb = inject(FormBuilder);

  public form = this.fb.group({
    name: this.fb.control(this.data.user.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: this.fb.control(this.data.user.email, [
      Validators.required,
      Validators.email,
    ]),
    website: this.fb.control(this.data.user.website, [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyName: this.fb.control(this.data.user.company.name, [
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
