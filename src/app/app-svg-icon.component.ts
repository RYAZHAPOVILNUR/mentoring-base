import { Component } from '@angular/core';
import { HeartYellowDirective, } from './directives/heart-yellow.directive'; 

@Component({
 standalone: true,
  selector: 'app-svg-icon',
  imports: [HeartYellowDirective],
  template: `
    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.8401 2.61012C20.3294 2.09912 19.7229 1.69376 19.0555 1.4172C18.388 1.14064 17.6726 0.998291 16.9501 0.998291C16.2276 0.998291 15.5122 1.14064 14.8448 1.4172C14.1773 1.69376 13.5709 2.09912 13.0601 2.61012L12.0001 3.67012L10.9401 2.61012C9.90843 1.57842 8.50915 0.998826 7.05012 0.998826C5.59109 0.998826 4.19181 1.57842 3.16012 2.61012C2.12843 3.64181 1.54883 5.04108 1.54883 6.50012C1.54883 7.95915 2.12843 9.35842 3.16012 10.3901L4.22012 11.4501L12.0001 19.2301L19.7801 11.4501L20.8401 10.3901C21.3511 9.87936 21.7565 9.27293 22.033 8.60547C22.3096 7.93801 22.4519 7.2226 22.4519 6.50012C22.4519 5.77763 22.3096 5.06222 22.033 4.39476C21.7565 3.7273 21.3511 3.12087 20.8401 2.61012V2.61012Z" heart-yellow stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" yellow/>
</svg>
  `,
  styles: [`
    svg {
      cursor: pointer;
    }
  `]
})
export class SvgIconComponent {
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}