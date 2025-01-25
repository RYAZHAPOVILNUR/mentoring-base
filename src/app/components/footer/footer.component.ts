import { Component } from '@angular/core';
import { CustomNumberPfonePipe } from '../../pipes/phone-format.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CustomNumberPfonePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
