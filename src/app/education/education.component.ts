import { Component, OnInit } from '@angular/core';
import { Education } from '../Models/models';
@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Daffodil International University",
      course: 'BSC in CSE',
      duration: '2014-2018',
      score: '75%',
    },
    {
      institute: "Uttara City College",
      course: 'HSC in Science',
      duration: '2013',
      score: '75%',
    },
    {
      institute: "Kaderida Textile mills & high school",
      course: 'SSC in Science',
      duration: '2011',
      score: '78%',
    },
  ]
  constructor() {

  }
  ngOnInit(): void {

  }
}
