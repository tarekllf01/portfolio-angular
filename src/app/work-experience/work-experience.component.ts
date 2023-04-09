import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../Models/models';
import { APIService } from '../api.service';
@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: any;
  constructor(private apiService: APIService) { }
  ngOnInit(): void {
    this.apiService.getExperienceInfo().subscribe(
      (res) => {
        this.workExpList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
