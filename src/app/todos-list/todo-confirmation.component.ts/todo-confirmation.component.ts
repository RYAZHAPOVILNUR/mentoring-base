import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
    standalone: true,
    templateUrl: "./todo-confirmation.component.html",
    imports: [MatDialogModule, MatButtonModule]
})
export class TodoConfirmationComponent{
    
}