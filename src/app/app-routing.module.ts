import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GiluronComponent } from './giluron/giluron.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/list-items',
        pathMatch: 'full',
    },
    {
        path: 'list-items',
        component: ListItemsComponent
    },
    {
        path: 'cart-items',
        component: CartItemsComponent
    },
    {
        path: 'delivery',
        component: DeliveryComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'giluron',
        component: GiluronComponent
    },
    // {
    //     path: '',
    //     redirectTo: 'list-items',
    //     pathMatch: 'full'
    // }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }