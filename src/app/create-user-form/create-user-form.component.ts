import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-create-user-form',
    templateUrl:'./create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule,
        MatButtonModule, 
        MatInputModule, 
        MatFormFieldModule,
        MatIconModule]
})


export class CreateUserFormComponent {
    @Output()
    createUser = new EventEmitter();


    public form = new FormGroup({
        id: new FormControl(new Date().getTime()),
        name: new FormControl('', { validators: [Validators.required]}),
        email: new FormControl('', { validators: [Validators.required, Validators.email]}),
        website: new FormControl('', { validators: [Validators.required]}),
        company: new FormGroup({
            name: new FormControl('', { validators: [Validators.required]}),
        })
    });
  

    public submitForm(): void {
        this.createUser.emit(this.form.value);
        this.form.reset();
    };
}