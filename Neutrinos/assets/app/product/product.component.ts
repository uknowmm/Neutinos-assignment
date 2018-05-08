import { Component} from '@angular/core';
import {Product} from "./prodect.model";
import {ProductService} from "./product.service";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
 count:number=0;
constructor(private pservice:ProductService){}
products: Product[];
cartProduct: Product[];


ngOnInit(){
 this.pservice.getProduct().then((data) => { this.products = data
  this.pservice.getCart().then((data) => { this.cartProduct = data;
    this.cartProduct.forEach( cartpro=> {
      this.products.forEach(product => {
        if(product.productName === cartpro.productName){
          product.button = true;
        }else{
          product.button = false;
        }
      });
    });

    console.log(this.products)
    });
  });
 
 
}

onAdd(data:Product) {
this.pservice.storeToCart(data);
this.count+=1;
  
}
}
