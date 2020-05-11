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
// import { ServerModule } from '@angular/platform-server';
// import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GiluronComponent } from './giluron/giluron.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
