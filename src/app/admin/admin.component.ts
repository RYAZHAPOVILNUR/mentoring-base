import { Component } from '@angular/core';
import { LoginDialogComponent } from "../login/login.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  imports: [LoginDialogComponent],
})
export class AdminComponent {}