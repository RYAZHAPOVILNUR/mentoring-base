import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../Material.module';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.scss'
})
export class CreateUserFormComponent {
  @Output() createUser = new EventEmitter();

  createUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,Validators.pattern('^\\+?[0-9]{10,15}$')]),
    website: new FormControl('', Validators.required),
  })

  submitForm(){
    const userId = Date.now(); 
    const userData = { ...this.createUserForm.value, id: userId };
    this.createUser.emit(userData)
    this.createUserForm.reset()
  }

}
