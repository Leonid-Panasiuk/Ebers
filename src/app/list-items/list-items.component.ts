import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  private products: Product[];

  constructor(private productsService: ProductsService, private cardService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  slides = [
    { img: "/assets/images/slick-2.png", id: 1 },
    { img: "/assets/images/slick-1.jpg", id: 2 },
    { img: "/assets/images/slick-3.jpg", id: 3 },
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "arrows": true,
    "autoplaySpeed": 2000
  };

}
