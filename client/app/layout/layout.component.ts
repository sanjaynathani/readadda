import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeaderComponent } from './header.component';
import { CenterComponent } from './center.component';

@Component({
  selector: 'ra-layout',
  template: '<ra-header>Loading..</ra-header><ra-center>Loading...</ra-center>',
  directives: [HeaderComponent,CenterComponent,ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

export class LayoutComponent implements OnInit {

  ngOnInit() {
      console.info('Loading Layout');
  }

}

