import { Component, inject} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, } from "@angular/material/dialog";
import { User } from "../../user-interface";

@Component ({
    selector: 'app-delete-user-dialog',
    templateUrl: './delete-user-Dialog.component.html',
    styleUrl: './delete-user-Dialog.component.scss',
    standalone: true,
    imports: [MatDialogClose],
})
export class deleteUserDialogComponent {
    
    readonly data = inject<{user: User}>(MAT_DIALOG_DATA);

}