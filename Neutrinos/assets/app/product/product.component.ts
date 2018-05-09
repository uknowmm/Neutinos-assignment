import { Component} from '@angular/core';
import {Product} from "./prodect.model";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  count: number = 0;
  constructor(private pservice: ProductService) { }
  products: Product[];
  cartProduct: Product[];
  ngOnInit() {
    this.loadValues();
  }
  loadValues() {
    this.pservice.getProduct().then((data) => {
    this.products = data
      this.pservice.getCart().then((data) => {
      this.cartProduct = data;
      this.count=this.cartProduct.length;
        for (let i = 0; i < this.products.length; i++) {
          if(this.cartProduct.length == 0){
            this.products[i].button = true;
          }
          for (let j = 0; j < this.cartProduct.length; j++) {
            if (this.products[i].productName === this.cartProduct[j].productName) {
              this.products[i].button = false;
              break;
            } else {
              this.products[i].button = true;
            }
          }
        }
      });
    });
  }
  onAdd(data: Product) {
    this.pservice.storeToCart(data);
    this.loadValues();
    
  }
}
