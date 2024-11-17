import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import {UserInterface} from '../../interfaces/user-interfaces';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
    selector: 'app-delete-user-dialog',
    standalone: true,
    imports: [MatDialogModule, MatFormFieldModule, MatTooltipModule],
    templateUrl: './delete-user-dialog.component.html',
    styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
    public readonly data: { user: UserInterface } = inject<{ user: UserInterface }>(MAT_DIALOG_DATA)
}
