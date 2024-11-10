import { Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogActions, MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 


@Component ({
    selector: 'app-admin-dialog',
    templateUrl: './admin-dialog.component.html',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule, MatIconModule, MatDialogClose, MatDialogActions],

})
export class AdminDialogComponent {

    readonly dialogRef = inject(MatDialogRef<AdminDialogComponent>)

    // loginAsAdmin(): void {
    //     this.dialogRef.close('admin');
    // }

    // loginAsUser():void {
    //     this.dialogRef.close('user');
    // }

}