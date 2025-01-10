import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@Component({
  standalone: true,
  selector: "app-user-confirmation",
  templateUrl: "./user-confirmation.component.html",
  imports: [MatButtonModule, MatDialogModule],
})
export class UserConfirmationComponent {}
