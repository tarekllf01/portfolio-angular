import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[responsive]'
})
export class ResponsiveDirective {

  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe(Breakpoints.WebLandscape)
      .subscribe((state: BreakpointState) => {
        console.log(state);
        if (state.matches) {
          this.element.nativeElement.classList.add('pc');
        } else {
          this.element.nativeElement.classList.remove('pc');
        }
      });
  }
}
