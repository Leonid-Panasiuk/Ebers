import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GiluronComponent } from './giluron/giluron.component';
import { NormeraComponent } from './normera/normera.component';
import { RegexinComponent } from './regexin/regexin.component';
import { FizormComponent } from './fizorm/fizorm.component';
import { ArticlesComponent } from './articles/articles.component';
import { AmarantComponent } from './news/amarant/amarant.component';
import { NettleComponent } from './news/nettle/nettle.component';
import { AloeComponent } from './news/aloe/aloe.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: '/list-items',
        pathMatch: 'full',
    },
    {
        path: 'list-items',
        component: ListItemsComponent,
        data: {title: 'Головна'}
    },
    {
        path: 'cart-items',
        component: CartItemsComponent,
        data: {title: 'Кошик'}
    },
    {
        path: 'delivery',
        component: DeliveryComponent,
        data: {title: 'Доставка і оплата'}
    },
    {
        path: 'products',
        component: ProductsComponent,
        data: {title: 'Продукція'}
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {title: 'Про компанію'}
    },
    {
        path: 'contacts',
        component: ContactsComponent,
        data: {title: 'Контакти'}
    },
    {
        path: 'giluron',
        component: GiluronComponent,
        data: {title: 'Гілурон'}
    },
    {
        path: 'normera',
        component: NormeraComponent,
        data: {title: 'Нормера'}
    },
    {
        path: 'regexin',
        component: RegexinComponent,
        data: {title: 'Регексін'}
    },
    {
        path: 'fizorm',
        component: FizormComponent,
        data: {title: 'Фізорм'}
    },
    {
        path: 'articles',
        component: ArticlesComponent,
        data: {title: 'Статті та новини'}
    },
    {
        path: 'amarant',
        component: AmarantComponent,
        data: {title: 'Амарант'}
    },
    {
        path: 'nettle',
        component: NettleComponent,
        data: {title: 'Кропива'}
    },
    {
        path: 'aloe',
        component: AloeComponent,
        data: {title: 'Алое'}
    },
    
    // {
    //     path: '',
    //     redirectTo: 'list-items',
    //     pathMatch: 'full'
    // }
];



@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }