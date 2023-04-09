import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;
  constructor(private apiService: APIService) { }
  ngOnInit(): void {
    this.apiService.getContactInfo().subscribe(
      (res) => {
        this.contact = res;
      }
    );
  }
}
