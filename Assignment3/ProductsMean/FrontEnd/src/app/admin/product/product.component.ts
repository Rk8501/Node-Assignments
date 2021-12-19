import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  data: any;
  constructor(private prodService: ProductService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.prodService.GetAdminData().subscribe(res => {
      this.products = res;
    })
  }

  deleteData(id:any) {
    this.prodService.DeleteData(id).subscribe(res => {
      console.log(res);
      this.data = res;
      this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut: 2000,
        progressBar: true
      });
      this.getData();
    })
  }

}
