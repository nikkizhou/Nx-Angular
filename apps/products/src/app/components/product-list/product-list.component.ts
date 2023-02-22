import { Component, OnInit } from '@angular/core';
import data from '../../../api/products/products.json'
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{
  pageTitle = 'Product List';
  products: IProduct[] = data
  showImage = true
  private _listFilter = ''
  filteredProducts : IProduct[] = []

  get listFilter():string {
    return this._listFilter
  }
  set listFilter(value:string){
    this._listFilter = value
    this.filteredProducts = this.performFilter(value)
  }

  performFilter(filterBy: string):IProduct[] {
    return this.products
      .filter((p: IProduct) =>
      p.productName.toLowerCase()
      .includes(filterBy.toLowerCase())
    )
  }

  toggleImage() {
    this.showImage = !this.showImage
  }

  ngOnInit(): void{
    this.listFilter='cart'
  }

  onRatingClicked(message:string): void{
    this.pageTitle="Product List: " + message
  }
}
