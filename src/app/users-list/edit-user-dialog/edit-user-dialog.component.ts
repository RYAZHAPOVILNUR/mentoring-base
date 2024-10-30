import { Component, inject, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { User } from '../../interfaces/user-interface';
import { CustomChangePhoneFormatPipe } from '../../pipes/change-phone-format.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  standalone: true,
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  selector: 'app-edit-user-dialog',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogClose,
    MatTooltipModule,
  ],
})
export class EditUserDialogComponent implements OnInit {
  readonly data = inject<{ user: User }>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>);

  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    company: new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    }),
    phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  nameErrorMessage = signal('');
  emailErrorMessage = signal('');
  websiteErrorMessage = signal('');
  companyNameErrorMessage = signal('');
  phoneErrorMessage = signal('');

  constructor() {
    merge(
      this.form.controls.name.statusChanges,
      this.form.controls.name.valueChanges,
      this.form.controls.email.statusChanges,
      this.form.controls.email.valueChanges,
      this.form.controls.website.statusChanges,
      this.form.controls.website.valueChanges,
      this.form.controls.company.controls.name.valueChanges,
      this.form.controls.company.controls.name.statusChanges,
      this.form.controls.phone.statusChanges,
      this.form.controls.phone.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  setErrorMessage(
    control: AbstractControl,
    errorMessages: { [key: string]: string }
  ) {
    const errorKeys = Object.keys(errorMessages);
    for (const errorKey of errorKeys) {
      if (control.hasError(errorKey)) {
        return errorMessages[errorKey];
      }
    }
    return '';
  }

  updateErrorMessage() {
    this.nameErrorMessage.set(
      this.setErrorMessage(this.form.controls.name, {
        required: 'Введите имя',
        minlength: 'Длина минимум 2 символа',
      })
    );

    this.emailErrorMessage.set(
      this.setErrorMessage(this.form.controls.email, {
        required: 'Введите почту',
        email: 'Почта введена некорректно',
      })
    );

    this.websiteErrorMessage.set(
      this.setErrorMessage(this.form.controls.website, {
        required: 'Введите адрес сайта',
        minlength: 'Длина минимум 3 символа',
      })
    );

    this.companyNameErrorMessage.set(
      this.setErrorMessage(this.form.controls.company.controls.name, {
        required: 'Введите название компании',
        minlength: 'Длина минимум 3 символа',
      })
    );

    this.phoneErrorMessage.set(
      this.setErrorMessage(this.form.controls.phone, {
        required: 'Введите номер телефона',
        minlength: 'Длина минимум 6 символов',
      })
    );
  }

  public submitForm() {
    if (this.form.dirty) {
      this.dialogRef.close({ ...this.form.value, id: this.data.user.id });
    } else {
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    this.form.patchValue(this.data.user);
  }
}
