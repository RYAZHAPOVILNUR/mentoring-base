import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../users-list.component";
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrl: './user-card.component.scss',
    standalone: true,
})

export class UserCardComponent {
    @Input()
    user!: User

    @Output()
    deleteUser = new EventEmitter()

    @Output()
    editUser = new EventEmitter()

    readonly dialog = inject(MatDialog);

    openDialog(): void {
        const dialogRef = this.dialog.open(EditUserDialogComponent, {
          data: {user: this.user},
        });

        dialogRef.afterClosed().subscribe((editResult) => {
          console.log('MODAL CLOSED', editResult);
        //   if (!editResult) return;
            if(editResult){
                this.editUser.emit(editResult)
            }
        });
      }

    onDeleteUser(userId: number) {
        this.deleteUser.emit(userId)
    }
}