import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['create-user-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})
export class CreateUserFormComponent {
  @Output()
  createUser = new EventEmitter();

  errorMessage = signal('');

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(7)]),
    website: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  });

  updateErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('email')?.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  
  public submitForm() {
    this.createUser.emit(this.form.value);
    this.form.reset()
  }
}
