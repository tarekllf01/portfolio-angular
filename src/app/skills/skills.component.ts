import { Component, OnInit } from '@angular/core';
import { Skill } from '../Models/models';
import { APIService } from '../api.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any;

  constructor(private apiService: APIService) {

  }
  ngOnInit(): void {
    this.apiService.getSkillInfo().subscribe(
      (res) => {
        this.skills = res;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
