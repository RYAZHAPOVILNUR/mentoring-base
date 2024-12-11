import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive ({
    selector: '[tooltip]',
    standalone: true,
})

export class TooltipDirective {
    @Input()
    tooltip = '';
  
    @HostBinding('attr.matTooltip')
    get matTooltip() {
      return this.tooltip;
    }
  
    @HostListener('mouseenter')
    enter() {
      this.tooltip = 'Редактировать данные пользователя'; 
      console.log('tool')
    }
  
    @HostListener('mouseleave')
    leave() {
      this.tooltip = ''; 
    }
  }

