import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


function getMenuName(menuName: string) {
  return menuName; 
}

const newName = getMenuName("О компании"); 

const newPages = [1, 2, 3, 4, 5]; 

const newArray = newPages.reverse(); 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'mentoring-first-project';

  readonly aboutCompany = newName; 
  readonly newPages = newPages;

  isShowImg = false; 
}



