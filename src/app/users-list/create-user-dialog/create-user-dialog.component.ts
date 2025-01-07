import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from "@angular/material/dialog";
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { IUsers } from "../users-list.component";

@Component({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    styleUrl: './create-user-dialog.component.scss',
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

export class CreateUserDialogComponent {


    readonly data = inject<{user: IUsers}>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);


    


    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9\-\+\(\)\ ]+$')]),
        companyName: new FormControl('', [Validators.required, Validators.minLength(2)])
    });

}