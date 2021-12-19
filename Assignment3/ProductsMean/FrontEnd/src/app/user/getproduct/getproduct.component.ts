import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css']
})
export class GetproductComponent implements OnInit {
data: any;
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.prodService.GetAdminData().subscribe(res => {
      this.data = res;
    });
  }

}
