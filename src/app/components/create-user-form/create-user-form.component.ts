import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.component.html',
    styleUrl: './create-user-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule],
})

export class CreateUserFormComponent {

    @Output()
    createUser = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        website: new FormControl(),
        companyName: new FormControl(),
    });

    public submitForm(): void{

        this.createUser.emit(this.form.value); 
        this.form.reset();

    }
}