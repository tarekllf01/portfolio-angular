import { APIService } from './../api.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css'],
})
export class BanerComponent implements OnInit {
  profile: any;
  constructor(private breakpointObserver: BreakpointObserver, private apiService: APIService) { }
  ngOnInit(): void {
    this.apiService.getPersonalInformation().subscribe(
      (res) => {
        this.profile = res;
      }
    );
  }
}

