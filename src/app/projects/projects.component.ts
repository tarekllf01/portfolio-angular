import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/models';
import { APIService } from '../api.service';
@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  constructor(private apiService: APIService) {

  }
  ngOnInit(): void {
    this.apiService.getProjectInfo().subscribe(
      (res) => {
        this.projects = res;
      }
    )
  }
}
