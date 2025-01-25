import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

  readonly notificationService = inject(NotificationService);

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
  public SubmitForm(): void {
    this.createUser.emit(this.form.value);
    this.form.reset();
    this.notificationService.showNotification('Пользователь добавлен!');
  }
}
