import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form!:FormGroup;
  submitted = false;
  data: any;


  constructor(private prodService:ProductService,private formbuilder:FormBuilder,
    private toastr: ToastrService, private router:Router) { }

  createForm() {
    this.form = this.formbuilder.group({
      name: ['',Validators.required],
      price: ['',Validators.required],
      des: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  insertData() {
    this.submitted = true;

    if(this.form.invalid) {
      return;
    }

    this.prodService.InsertData(this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 2000,
        progressBar: true
      });
      this.router.navigateByUrl('/products');
    })
  }

}
