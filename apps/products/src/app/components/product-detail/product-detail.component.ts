import { Component } from '@angular/core';


// use product-detail for another route instead of product-lists's child
@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {

  pageTitle: string = "Product Detail";
}
