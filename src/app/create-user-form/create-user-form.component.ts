import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
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

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
})
export class CreateUserFormComponent {
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyName: new FormControl('', [
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

  @Output()
  createNewUser = new EventEmitter();

  public submitForm(): void {
    this.createNewUser.emit(this.form.value);
    this.form.reset();
  }
}
