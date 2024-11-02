import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interfaces/user.interface';
import {MatTooltipModule} from '@angular/material/tooltip';


@Component({
  selector: '',
  templateUrl: './create-edit-user-dialog.component.html',
  styleUrls: ['./create-edit-user-dialog.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogClose,
    MatTooltipModule
  ],
  standalone: true,
})
export class CreateEditUserDialogComponent {

 

  readonly data = inject<{ user?: User; isEdit: boolean }>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    name: new FormControl(this.data.user?.name, [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl(this.data.user?.email, [
      Validators.required,
      Validators.email,
    ]),
    phone: new FormControl(this.data.user?.phone.replace(/[^\w\s]|_/g, '').slice(0, 10), [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    website: new FormControl(this.data.user?.website, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  get userWithUpdatedFields() {
    return {
      ...this.form.value,
      id: this.data.user?.id,
    };
  }

  errorMessagePhone = signal('');
  errorMessageEmail = signal('');

  updateErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      this.errorMessageEmail.set('You must enter a value');
    } else if (this.form.get('email')?.hasError('email')) {
      this.errorMessageEmail.set('Not a valid email');
    } else {
      this.errorMessageEmail.set('');
    }

    if (this.form.get('phone')?.hasError('required')) {
      this.errorMessagePhone.set('You must enter a value');
    } else if (this.form.get('phone')?.errors) {
      this.errorMessagePhone.set('Not a valid phone');
    } else {
      this.errorMessagePhone.set('');
    }
  }

  
}
