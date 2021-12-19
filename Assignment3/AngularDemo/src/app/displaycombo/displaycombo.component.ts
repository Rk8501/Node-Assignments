import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycombo',
  templateUrl: './displaycombo.component.html',
  styleUrls: ['./displaycombo.component.css']
})
export class DisplaycomboComponent implements OnInit {
  listCombo : Array<String> = ["IT", "ICT", "BCA", "MCA", "BBA"]

  constructor() { }

  ngOnInit(): void {
  }

}
