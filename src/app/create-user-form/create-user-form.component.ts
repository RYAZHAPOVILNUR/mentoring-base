import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class UserFormComponent {
  @Output()
  createUser = new EventEmitter();

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    company: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  submitForm(): void {
    this.createUser.emit(this.form.value);
    this.form.reset()
  }
}
