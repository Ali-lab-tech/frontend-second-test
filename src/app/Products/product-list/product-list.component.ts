import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ProductService.getProducts().subscribe(
      (response) => {
        let data =  Object.entries(response);
        this.products = data[0][1];
        console.log('this.products',this.products);
      },
      (error) => {
        console.error('Error creating product:', error);
      }
    );
  }

}
