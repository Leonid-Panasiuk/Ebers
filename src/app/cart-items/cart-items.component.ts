import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms'


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
 

  private cart: CartItem[];

  user = {
    name: '',
    phone: '',
    city: '',
    department: '',
    street: ''
  }

  formValue : FormGroup;

  constructor(private cartService: CartService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cart = this.cartService.getCartItems();
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    street: new FormControl('', [Validators.required])
  });
  onSubmit() {
    console.log(this.userForm.value);
  }

}
