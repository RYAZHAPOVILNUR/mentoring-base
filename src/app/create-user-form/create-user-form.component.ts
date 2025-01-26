import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.scss',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})

export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

    public form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      website: new FormControl('', [Validators.required, Validators.minLength(3)]),
      companyName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });

    public submitForm(): void {
      this.createUser.emit(this.form.value);
      this.form.reset();
    }

    constructor() {
      this.form.valueChanges.subscribe(formValue => console.log(formValue ));
    }
}
