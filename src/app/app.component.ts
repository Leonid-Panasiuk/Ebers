import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cartService: CartService, config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
   }

   open(content) {
    this.modalService.open(content);
  }

  // onActivate(event) {
  //   window.scroll(100, 100);
  // }

  popupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8),
    ])
    
  });
}

