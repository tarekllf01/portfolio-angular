import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css'],
})
export class BanerComponent implements OnInit {
  fullName = 'MD TAREK HOSSEN';
  constructor(private breakpointObserver: BreakpointObserver) { }
  ngOnInit(): void { }
}

