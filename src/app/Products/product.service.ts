import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getProducts() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(`${this.apiUrl}/products`, { headers });
  }


  submitProduct(productData: any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.post(`${this.apiUrl}/products`, productData,{ headers });
  }
}

