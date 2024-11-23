import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { IUser } from "../../interfaces/interfaces";

@Component({
  selector: 'app-delete-user-dialog',
  standalone: true,
  imports: [ MatDialogModule, MatButton ],
  templateUrl: './delete-user-dialog.component.html',
  styleUrl: './delete-user-dialog.component.scss'
})
export class DeleteUserDialogComponent {
  public readonly data = inject<{ user: IUser }>(MAT_DIALOG_DATA);

  readonly dialog = inject(MatDialog)
}
