import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cartService: CartService, config: NgbModalConfig, private modalService: NgbModal , private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute,) { 
    config.backdrop = 'static';
    config.keyboard = false;
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        console.log('title', title);
        titleService.setTitle(title);
      }
    });
   }

   open(content) {
    this.modalService.open(content);
  }

  onActivate(event) {
    window.scroll(0, 0);
  }

  popupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone : new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8),
    ])
  });

  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}



