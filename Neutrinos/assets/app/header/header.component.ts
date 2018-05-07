import { Product } from './../product/prodect.model';
import { ProductService } from './../product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private productService:ProductService){
    
  }
  ngOnInit() {
    
  }
}
