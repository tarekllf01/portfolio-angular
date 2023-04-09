import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() key = '';
  @Input() value = '';
  constructor() {

  }

  ngOnInit(): void {

  }
}
