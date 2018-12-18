import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef) { }
  private elementRefParent = this.elementRef.nativeElement.closest('.btn-group');
    @HostListener('click') dropToggle() {
      this.elementRefParent.querySelector('.dropdown-menu').classList.toggle('show');
    }

}
