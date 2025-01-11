import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: '../app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FooterComponent {

}
