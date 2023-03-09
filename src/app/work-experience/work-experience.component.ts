import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../Models/models';
@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'GLIL',
      duration: 'June 2018 - Now',
      description: [
        'Developing scalable web application, API, Insurance Management System ',
        'Lead team and projects'
      ]
    }
  ];
  constructor() { }
  ngOnInit(): void {

  }
}
