// ПОКА В РАЗРАБОТКЕ


import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from "@angular/core";
import {ReactiveFormsModule } from "@angular/forms";
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { IUsers } from "../../users-list.component";

@Component({
    selector: 'app-delete-user-dialog',
    templateUrl: './del-user-dialog.component.html',
    styleUrl: './del-user-dialog.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatButton,
                  MatInputModule,
                  MatFormFieldModule,
                  MatIconModule,
                  MatButtonModule,
                  ReactiveFormsModule,
                  MatDialogClose,
                  MatDialogActions,
                  MatDialogContent]
})

export class DeleteUserDialogComponent {


    @Output()
    deleteUser = new EventEmitter



    readonly data = inject(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);

}
