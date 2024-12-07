import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {

    @Output()
    createUser = new EventEmitter();

  public form = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    companyName: new FormControl(null, [Validators.required, Validators.minLength(2)])
  });

  public formInput(): void{
    this.createUser.emit(this.form.value);
    this.form.reset()
  }
}
