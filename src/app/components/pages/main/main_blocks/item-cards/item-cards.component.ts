import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-item-cards',
  imports: [NgFor],
  templateUrl: './item-cards.component.html',
  styleUrl: './item-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardsComponent {
  public readonly newPages = [5, 4, 3, 2, 1];
}
