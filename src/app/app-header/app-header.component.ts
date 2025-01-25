import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
    nav = ['Главная','О компании','Каталог'];
    
    isDelete: boolean = false;

    deleteCatalog() {
      if (this.isDelete === false){
        this.nav = ['Главная','О компании'];
      } else {
        this.nav = ['Главная','О компании','Каталог'];
      }
      this.isDelete = !this.isDelete;
      return this.nav;
    };
}
