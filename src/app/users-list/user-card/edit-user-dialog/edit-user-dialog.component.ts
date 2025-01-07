import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { IUsers } from "../../users-list.component";

@Component({
    selector: 'app-edit-user-dialog',
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButton,
              MatInputModule,
              MatFormFieldModule,
              MatIconModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatDialogClose]
})

export class EditUserDialogComponent {
    
    @Output()
    createUser = new EventEmitter
    

    readonly data = inject<{user: IUsers}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);


    public form = new FormGroup({
            name: new FormControl(this.data.user.name, [Validators.required, Validators.minLength(2)]),
            email: new FormControl(this.data.user.email, [Validators.required, Validators.email]),
            website: new FormControl(this.data.user.website, [Validators.required, Validators.minLength(3)]),
            phone: new FormControl(this.data.user.phone, [Validators.required, Validators.pattern('^[0-9\-\+\(\)\ ]+$')]),
            companyName: new FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)]),
        });



    public submitForm(): void {
        this.dialogRef.close(this.form.value)
    }

    get userWithUpdatedFields () {
        return {
            ...this.form.value,
            id: this.data.user.id,
        };
    }

}