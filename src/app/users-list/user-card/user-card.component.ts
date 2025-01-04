import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../users-list.component";
import { MatDialog } from "@angular/material/dialog";
import { EditUserDialog } from "../edit-user-dialog/edit-user-dialog.component";
import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CustomCutPipe } from "../../My Pipes/cutPipe";



@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatTooltipModule]
})

export class UserCardComponent {
    @Input()
    user!: User

    @Output()
    deleteUser = new EventEmitter()
    onDeleteUser(id: number) {
        this.deleteUser.emit(id)
    }
     @Output()
     editUser = new EventEmitter()

    readonly dialog = inject(MatDialog)

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialog, {
            data: { user: this.user }
        })

        dialogRef.afterClosed().subscribe((EditResult) => {
           if (EditResult) {
            this.editUser.emit(EditResult);
           }
        })
    }



}
