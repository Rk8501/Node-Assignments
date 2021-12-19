import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-displaydatatypes',
  templateUrl: './displaydatatypes.component.html',
  styleUrls: ['./displaydatatypes.component.css']
})
export class DisplaydatatypesComponent implements OnInit {
  name : string = "Riddhi";
  age : number = 21;
  birthdate : Date = new Date('2001-05-08');
  constructor() { }

  ngOnInit(): void {
  }

}
