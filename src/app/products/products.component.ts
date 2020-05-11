import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Product[];

  constructor(private productsService: ProductsService, private cardService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
