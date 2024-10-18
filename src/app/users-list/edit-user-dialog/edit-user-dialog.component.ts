import { Component, inject, signal } from '@angular/core';
import {
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
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { User } from '../../interfaces/user-interface';

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
  ],
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

  nameErrorMessage = signal('');
  emailErrorMessage = signal('');
  websiteErrorMessage = signal('');
  companyNameErrorMessage = signal('');

  constructor() {
    merge(
      this.form.controls.name.statusChanges,
      this.form.controls.name.valueChanges,
      this.form.controls.email.statusChanges,
      this.form.controls.email.valueChanges,
      this.form.controls.website.statusChanges,
      this.form.controls.website.valueChanges,
      this.form.controls.companyName.statusChanges,
      this.form.controls.companyName.valueChanges
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.form.controls.name.hasError('required')) {
      this.nameErrorMessage.set('Введите имя');
    } else if (this.form.controls.name.hasError('minlength')) {
      this.nameErrorMessage.set('Длина минимум 2 символа');
    } else {
      this.nameErrorMessage.set('');
    }

    if (this.form.controls.email.hasError('required')) {
      this.emailErrorMessage.set('Введите почту');
    } else if (this.form.controls.email.hasError('email')) {
      this.emailErrorMessage.set('Почта введена некорректно');
    } else {
      this.emailErrorMessage.set('');
    }

    if (this.form.controls.website.hasError('required')) {
      this.websiteErrorMessage.set('Введите адрес сайта');
    } else if (this.form.controls.website.hasError('minlength')) {
      this.websiteErrorMessage.set('Длина минимум 3 символа');
    } else {
      this.websiteErrorMessage.set('');
    }

    if (this.form.controls.companyName.hasError('required')) {
      this.companyNameErrorMessage.set('Введите название компании');
    } else if (this.form.controls.companyName.hasError('minlength')) {
      this.companyNameErrorMessage.set('Длина минимум 2 символа');
    } else {
      this.companyNameErrorMessage.set('');
    }
  }

  submitForm() {
    return {
      ...this.data.user,
      name: this.form.value.name,
      email: this.form.value.email,
      website: this.form.value.website,
      company: {
        name: this.form.value.companyName,
      },
    };
  }
}
