import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mobile: string = '+8801684093813';
  email: string = 'tarekllf01@gmail.com';
  constructor() { }
  ngOnInit(): void {

  }
}
