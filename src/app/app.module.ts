import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemsComponent } from './list-items/list-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './products.service';
import { CartService } from './cart.service';
import { FormsModule } from '@angular/forms';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GiluronComponent } from './giluron/giluron.component';
import { NormeraComponent } from './normera/normera.component';
import { RegexinComponent } from './regexin/regexin.component';
import { FizormComponent } from './fizorm/fizorm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesComponent } from './articles/articles.component';
import { AmarantComponent } from './news/amarant/amarant.component';
import { NettleComponent } from './news/nettle/nettle.component';
import { AloeComponent } from './news/aloe/aloe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    CartItemsComponent,
    DeliveryComponent,
    ProductsComponent,
    AboutComponent,
    ContactsComponent,
    GiluronComponent,
    NormeraComponent,
    RegexinComponent,
    FizormComponent,
    ArticlesComponent,
    AmarantComponent,
    NettleComponent,
    AloeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgbModule,
  ],
  providers: [ProductsService, CartService, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
