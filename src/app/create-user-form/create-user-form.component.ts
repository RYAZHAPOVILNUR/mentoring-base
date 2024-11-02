import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from "@angular/forms";


@Component ({
selector: 'app-create-user-form' ,
templateUrl: 'create-user-form.component.html',
styleUrl: 'create-user-form.component.scss',
standalone: true,
imports: [ReactiveFormsModule]
})
export class CreateUserFormComponent {

    @Output()

    createUser = new EventEmitter()

   public form = new FormGroup ({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    website: new FormControl(null, [Validators.required]),
    companyName:  new FormControl(null, [Validators.required])
   })

   public submitForm(): void {
    this.createUser.emit(this.form.value)
   }
}