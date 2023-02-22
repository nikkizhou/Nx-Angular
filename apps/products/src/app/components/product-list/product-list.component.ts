import { Component } from '@angular/core';
import data from '../../../api/products/products.json'

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  products: any[] = data

}
