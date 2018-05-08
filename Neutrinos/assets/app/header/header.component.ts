import { Product } from './../product/prodect.model';
import { ProductService } from './../product/product.service';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Inupt('bind') itemcount;
  constructor(private productService:ProductService){
    
  }
  ngOnInit() {
    
  }
}
