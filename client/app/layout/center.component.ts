import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'ra-center',
  templateUrl: 'center.component.html',
  directives: [ROUTER_DIRECTIVES],
  
})

export class CenterComponent implements OnInit {

  ngOnInit() {
      console.info('Loading Center');
  }

}

