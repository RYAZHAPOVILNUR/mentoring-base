import { Component } from '@angular/core';
import { AdminCheckingPageComponent } from '../admin-checking-page/admin-checking-page.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink ,AdminCheckingPageComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent {}
