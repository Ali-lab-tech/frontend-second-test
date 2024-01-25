import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css']
})
export class FeedbackCreateComponent implements OnInit {

  feedbackData = {
    title: '',
    description: '',
    category: '',
    product_id: ''
  };

  products: any;
  ngOnInit(): void {
    this.getProducts();
  }
  constructor(private feedbackService: FeedbackService) {}

  submitFeedback() {
    console.log('this.feedbackData',this.feedbackData);

    this.feedbackService.createFeedback(this.feedbackData).subscribe(
      (response) => {
        console.log('Feedback created successfully:', response );
        // Handle success, e.g., show a success message or navigate to a different page
      },
      (error) => {
        console.error('Error creating feedback:', error);
        // Handle error, e.g., show an error message
      }
    );
  }

  getProducts(){
    this.feedbackService.getProducts().subscribe(
      (response) => {
        let data =  Object.entries(response);
        this.products = data[0][1];
        console.log('this.products',this.products[0].name);

      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
