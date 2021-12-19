import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {
  form!:FormGroup;
  constructor(private formBuilder:FormBuilder, private router:Router) { }

  createForm(){
    this.form = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email:['']
    })
  }

  sendData(){
    this.router.navigate(["/displayformdata"],{state:this.form.value})
  }

  ngOnInit(): void {
    this.createForm();
  }

}
