import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-create-user', 
    templateUrl: './create-user-form.html',
    styleUrl: './create-user-form.scss', 
    standalone: true,
    imports: [ReactiveFormsModule], 
}) 
export class CreateUserFormComponent {
    @Output() 
    createUser = new EventEmitter()

    public form = new FormGroup({
        name: new FormControl(), 
        email: new FormControl(), 
        website: new FormControl(), 
        companyName: new FormControl(), 
    }); 

    public submitForm(): void {

        this.createUser.emit(this.form.value);
    }
}