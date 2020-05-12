import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-normera',
  templateUrl: './normera.component.html',
  styleUrls: ['./normera.component.css']
})
export class NormeraComponent implements OnInit {

  private products: Product[];
  private cart: CartItem[];


  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.cart = this.cartService.getCartItems();
  }
  
}

export class CartItem{
  product: Product;
  quantity: number;
}
