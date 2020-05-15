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
    {img: "/assets/images/slick-1.jpg",
    text:'Декілька слів'},
    {img: "/assets/images/slick-2.png"},
    {img: "/assets/images/slick-3.jpeg"}, 
  ];
  slideConfig = {"slidesToShow": 1,
   "slidesToScroll": 1,
   "dots": true,
   "infinite": true,
  //  "autoplay": true,
   arrows: true,
  //  "autoplaySpeed": 1500
  };
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
