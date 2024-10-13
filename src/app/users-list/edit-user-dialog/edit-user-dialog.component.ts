import { Component, inject, signal } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { User } from "../../interfaces/user.interface";


@Component({
  selector: '',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, MatDialogClose],
  standalone: true,
})
export class EditUserDialogComponent {
  readonly data = inject<{user: User}>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
    phone: new FormControl(this.data.user.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(2)]),
  })

  errorMessage = signal('');


  updateErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('email')?.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }

    if (this.form.get('phone')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('phone')?.errors) {
      this.errorMessage.set('Not a valid phone');
    } else {
      this.errorMessage.set('');
    }
  }

  get userWithUpdatedFields() {
    return {
      ...this.form.value,
      id: this.data.user.id
    }
  }
}
