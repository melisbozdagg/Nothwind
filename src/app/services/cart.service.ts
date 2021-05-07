import { Injectable } from '@angular/core';
import { cartItem } from '../models/cartItem';
import { cartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product:Product){
    let item = cartItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity +=1;
    }
    else{
      let CartItem = new cartItem();
      CartItem.product=product;
      CartItem.quantity=1;
      cartItems.push(CartItem);
    }
   }
   List():cartItem[]{
    return cartItems;
  }
  removeFromCart(product:Product){
    let item = cartItems.find(c=>c.product.productId===product.productId);
    cartItems.splice(cartItems.indexOf(item),1)
  }
}
