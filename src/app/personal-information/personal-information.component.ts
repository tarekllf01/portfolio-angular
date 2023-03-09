import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['name', 'MD TAREK HOSSEN'],
    ['DOB', '31/10/1994'],
    ['Work Exp', '5 Years'],
    ['Education', 'BSC in CSE (2018)'],
    ['Interest', 'Cricket'],
  ];
  aboutMe: string[] = [
    'Hi I am Software Engineer with 5 years of experiences in software development.',
    'I have been working as a software engineer in a local reputed company in Bangladesh.',
    'I am passonate on PHP , Laravel & javascript',
    'I am passonate on PHP , Laravel & javascript',
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
