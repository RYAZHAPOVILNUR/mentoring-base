import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef, } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { User } from "../../user-interface";
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDialogClose, MatTooltipModule],
})
export class EditUserDialogComponent {
    readonly data = inject<{user: User}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef<EditUserDialogComponent>)
    
    public form = new FormGroup({
        name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
        email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
        website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
        phone: new FormControl(this.data.user.phone, [Validators.required, Validators.minLength(10),]),
        company: new FormGroup({name: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)])}),
    })

    submitForm() {
        this.dialogRef.close({...this.form.value, id: this.data.user.id});
    }
}