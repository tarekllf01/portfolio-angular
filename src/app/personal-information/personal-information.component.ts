import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  // myData: string[][] = [
  //   ['name', 'MD TAREK HOSSEN'],
  //   ['DOB', '31/10/1994'],
  //   ['Work Exp', '5 Years'],
  //   ['Education', 'BSC in CSE (2018)'],
  //   ['Interest', 'Cricket'],
  // ];
  myData: any;
  constructor(private _apiservice: APIService) { }
  ngOnInit(): void {
    this._apiservice.getPersonalInformation().subscribe(
      res => {
        this.myData = res;
      },
      error => {
        console.log(error);
      }

    );
  }
}
