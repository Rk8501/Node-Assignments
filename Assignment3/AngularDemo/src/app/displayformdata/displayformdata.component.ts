import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayformdata',
  templateUrl: './displayformdata.component.html',
  styleUrls: ['./displayformdata.component.css']
})
export class DisplayformdataComponent implements OnInit {
  firstname = "";
  lastname = "";
  email = "";
  data:any;

  constructor(private router:Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state
    this.firstname = this.data.firstname;
    this.lastname = this.data.lastname;
    this.email = this.data.email;
   }

  ngOnInit(): void {
  }

}
