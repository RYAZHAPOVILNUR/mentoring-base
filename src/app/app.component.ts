import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header-component';
import { UsersListComponent } from './users-list/users-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, HeaderComponent, UsersListComponent],
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss'
})
export class AppComponent {
  title = 'mentoring-first-project';
  isShowWorker = true;
}

