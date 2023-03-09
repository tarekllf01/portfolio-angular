import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  @HostBinding('class.pc') pcMode = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.WebLandscape)
      .subscribe((state: BreakpointState) => {
        console.log(state);
        if (state.matches) {
          this.pcMode = true;
        } else {
          this.pcMode = false;
        }
      });
  }
}
