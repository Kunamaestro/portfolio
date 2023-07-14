import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[buttonSelected]'
})
export class SelectedDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#ffcc00');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('#1c1e1f');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
