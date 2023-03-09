import { Component, OnInit } from '@angular/core';
import { Skill } from '../Models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'PHP,Laravel',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'Mysql, MSSQL',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90
    },
    {
      name: 'Javascript',
      level: 'Intermediate',
      rating: 70
    },
    {
      name: 'JavaScript Frameworks(Jquery,React,Angular)',
      level: 'Intermediate',
      rating: 60
    },
    {
      name: 'Python',
      level: 'Intermediate',
      rating: 70
    },
  ];

  constructor() {

  }
  ngOnInit(): void {

  }
}
