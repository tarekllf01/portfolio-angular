import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Education } from '../Models/models';
@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {


  educationList: any;
  constructor(private apiService: APIService) {

  }
  ngOnInit(): void {
    this.apiService.getEducationalInfo().subscribe(
      (res) => {
        this.educationList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
