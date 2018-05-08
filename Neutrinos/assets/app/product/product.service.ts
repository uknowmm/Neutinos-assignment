import { Observable } from "rxjs/Observable";
import { Http, Headers, Response } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import {Product} from "./prodect.model";


@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }
  // private  product: Product[] = [
    //   new Product('Apple iPhone 7', 48000, 'https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg'),
     //  new Product('Apple iPhone 8', 50000, 'https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg'),
     //  new Product('Apple iPhone x', 90000, 'https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg')
  //];

getProduct(){

    return this.http.get<any>('http://localhost:3000/product')
      .toPromise()
      .then(res => {   return res["obj"]; } );

   //  this.product.slice();
}

storeProduct(data:Product) {
    const body=JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:3000/product', data)
                 .toPromise()
                 .then(res => {   return res; });

}

storeToCart(data:Product) {
    console.log(data)
    const body=JSON.stringify(data);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post('http://localhost:3000/product/cart', data)
                 .toPromise()
                 .then(res => {   return res; });

}

getCart(){
    return this.http.get<any>('http://localhost:3000/product/cart')
      .toPromise()
      .then(res => {   return res["obj"]; } );

}

deleteFromCart(data:Product){
     return this.http.delete('http://localhost:3000/product/cart/'+data["_id"])
                .toPromise()
                .then(res => {   return res; });
}

}
