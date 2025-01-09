import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ItemCardsComponent } from './main_blocks/item-cards/item-cards.component';
import { ItemFavoriteCardsComponent } from './main_blocks/item-favorite-cards/item-favorite-cards.component';
import { MoreNamesComponent } from './main_blocks/more-names/more-names.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgIf,
    ItemCardsComponent,
    ItemFavoriteCardsComponent,
    MoreNamesComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isShow = true;
}
