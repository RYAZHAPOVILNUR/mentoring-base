import { Component, EventEmitter, inject, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { UserCreateDialogComponent } from "../user-create-dialog.component";
@Component({
    selector: 'app-user-create-button',
    templateUrl: './user-create-button.component.html',
    styleUrl: './user-create-button.component.scss',
    standalone: true,
    imports: [MatButtonModule]
})

export class UserCreateButtonComponent {
    @Output()
    createUser = new EventEmitter()

    readonly dialog = inject(MatDialog);

    public openDialog(): void {
        const dialogRef = this.dialog.open(UserCreateDialogComponent)

        dialogRef.afterClosed().subscribe((createResult) => {
            console.log(createResult);
            this.createUser.emit(createResult)
        })
    }
}