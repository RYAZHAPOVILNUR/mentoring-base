import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-item-favorite-cards',
    imports: [],
    templateUrl: './item-favorite-cards.component.html',
    styleUrl: './item-favorite-cards.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemFavoriteCardsComponent {}
