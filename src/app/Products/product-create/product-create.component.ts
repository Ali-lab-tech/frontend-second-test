import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productData = {
    name: '',
    description: '',
  };
  alertType: string | null = null;
  alertMessage: string | null = null;
  constructor(private ProductService: ProductService) {}
  ngOnInit(): void {
  }
  submitProduct() {
    this.ProductService.submitProduct(this.productData).subscribe(
      (response) => {
        console.log('Product created successfully:', response);
        this.showSuccessAlert();
      },
      (error) => {
        console.error('Error creating product:', error);
        this.showErrorAlert();
      }
    );
  }

  showSuccessAlert() {
    this.showAlert('success', 'Product created successfully!');
  }

  showErrorAlert() {
    this.showAlert('danger', 'Error creating product. Please try again.');
  }

  showAlert(type: string, message: string) {
    this.alertType = type; // 'success' or 'danger'
    this.alertMessage = message;
    setTimeout(() => {
      this.alertType = null;
      this.alertMessage = null;
    }, 5000); 
  }
}


