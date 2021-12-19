import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id:any;
  data: any;
  product = new Product();

  form = new FormGroup ({
    name: new FormControl(''),
    price: new FormControl(''),
    des: new FormControl('')
    })
  

  constructor(private prodService:ProductService, private route:ActivatedRoute,
    private toastr:ToastrService, private router:Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.prodService.GetAdminDataById(this.id).subscribe(res => {
      this.data = res;
      this.product = this.data;
      this.form = new FormGroup ({
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        des: new FormControl(this.product.des)
      });      
    });
  }

  updateData() {
    this.prodService.UpdateData(this.id, this.form.value).subscribe(res => {
      this.data = res;
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 2000,
        progressBar: true
      });
      this.router.navigateByUrl('/products');
    })
  }

}
