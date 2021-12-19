import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  GetAdminData() {
    return this.httpClient.get(environment.root + '/products');
  }

  GetAdminDataById(id:any) {
    return this.httpClient.get(environment.root + '/products/' + id);
  }

  InsertData(data: any) {
    return this.httpClient.post(environment.root + '/products', data);
  }

  UpdateData(id: any, data: any) {
    return this.httpClient.put(environment.root + '/products/'+id , data);
  }

  DeleteData(id: any) {
    return this.httpClient.delete(environment.root + '/products/' + id);
  }
}
