import { Component, OnInit } from 'angular2/core';
import { LoggedInRouterOutlet } from '../security/secured.directive';

@Component({
  selector: 'ra-center',
  templateUrl: 'center.component.html',
  directives: [LoggedInRouterOutlet],
  
})

export class CenterComponent implements OnInit {

  ngOnInit() {
      console.info('Loading Center');
  }

}

