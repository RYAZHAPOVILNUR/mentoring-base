import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['create-user-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(7)]),
    website: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  });
  public submitForm() {
    this.createUser.emit(this.form.value);
    this.form.reset()
  }
}
