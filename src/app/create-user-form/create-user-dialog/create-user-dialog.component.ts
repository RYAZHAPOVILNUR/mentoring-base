import { Component, EventEmitter, inject, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CreateUserFormComponent } from "../create-user-form.component";
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-create-user-dialog',
    templateUrl: './create-user-dialog.component.html',
    styleUrl: './create-user-dialog.component.scss',
    standalone: true,
    imports: [MatButtonModule]
})

export class CreateUserDialogComponent {
    @Output()
    createUser = new EventEmitter()

    readonly dialog = inject(MatDialog);

    public openDialog(): void {
        const dialogRef = this.dialog.open(CreateUserFormComponent)

        dialogRef.afterClosed().subscribe((createResult) => {
            console.log(createResult);
            this.createUser.emit(createResult)
        })
    }
}