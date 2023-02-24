import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import data from '../../../api/products/products.json'
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy{
  pageTitle:string = 'Product List';
  products: IProduct[] = []
  showImage:boolean = true
  private _listFilter = ''
  filteredProducts: IProduct[] = []
  errMsg: string = ''
  sub!: Subscription;
  
  constructor(private productService:ProductService) {
  }

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
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        // ??? filteredProducts is empty until the filterBy is set
        this.filteredProducts = this.products
      },
      error: e=>this.errMsg=e
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  onRatingClicked(message:string): void{
    this.pageTitle="Product List: " + message
  }
}
