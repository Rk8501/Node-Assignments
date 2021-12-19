import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.css']
})
export class DisplaylistComponent implements OnInit {
  listData : Array<Number> = [1,2,3,4];
  constructor() { }

  ngOnInit(): void {
  }

}
