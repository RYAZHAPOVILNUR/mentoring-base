import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-item-cards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './item-cards.component.html',
  styleUrl: './item-cards.component.scss',
})
export class ItemCardsComponent {
  newPages = [5, 4, 3, 2, 1];
}
