import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-log-user-dialog',
    templateUrl: './log-user-dialog.component.html',
    styleUrl: './log-user-dialog.component.scss',
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
})
export class LogUserDialogComponent {   
}