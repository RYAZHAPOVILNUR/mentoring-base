import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-checking-page',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './admin-checking-page.component.html',
  styleUrl: './admin-checking-page.component.scss',
})
export class AdminCheckingPageComponent {}
