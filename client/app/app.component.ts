import {Component, OnInit, provide} from 'angular2/core';
import { LayoutComponent } from './layout/layout.component';
//import { ReadBoardComponent } from './readboard/readboard.component';
//import { WriteBoardComponent } from './writeboard/writeboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MainRoutes } from './route/main_routes';


@Component({
    selector: 'read-adda',
    template: '<ra-layout>Loading..</ra-layout>',
    directives: [LayoutComponent, ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig(MainRoutes)
/*@RouteConfig([
  {
    path: '/readboard',
    name: 'ReadBoard',
    component: ReadBoardComponent,
    useAsDefault: true
  },
  {
    path: '/writeboard',
    name: 'WriteBoard',
    component: WriteBoardComponent
  }
])*/


export class AppComponent implements OnInit { 
  constrctor(){
    
  }
  
  ngOnInit() {
      console.info('Loading ReadAdda');
      //this._authenticationService.isLoggedIn();
      //this.loggedIn();
  }
  
}