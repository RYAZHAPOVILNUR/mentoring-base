import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss',
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

  public fb = inject(FormBuilder);

  public form = this.fb.group({
     name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
     email: this.fb.control('', [Validators.required, Validators.email]),
     website: this.fb.control('', [Validators.required, Validators.minLength(3)]),
     companyName: this.fb.control('', [Validators.required, Validators.minLength(2)]),
  })

  public submitForm(): void {
    this.createUser.emit(this.form.value);
    console.log(this.form.invalid);
  }
}
