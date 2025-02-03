import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogClose } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { User } from "../users.component";

@Component({
    selector: 'app-edit-dialog',
    standalone: true,
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss',
    imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule,  MatButtonModule, MatIconModule, MatDialogClose]
})

export class EditUserDialogComponent {

    private readonly data = inject<{user: User}>(MAT_DIALOG_DATA);

    public form = new FormGroup({
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(3)]),
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
        company: new FormGroup({
           name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(3)]), 
        })
    });
    
   get userWithUpdatedFields() {
        return {
            ...this.form.value,
            id: this.data.user.id,
        };
    }
 
}