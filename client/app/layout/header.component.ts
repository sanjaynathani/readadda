import { Component, OnInit, Inject } from 'angular2/core';
import { ROUTER_DIRECTIVES, Location, Router } from 'angular2/router';
import {NgClass,NgForm} from 'angular2/common';
import { AuthenticationService } from '../security/authentication.service';
import { Authentication } from '../security/authentication';

@Component({
  selector: 'ra-header',
  templateUrl: 'header.component.html',
  directives: [ROUTER_DIRECTIVES,NgClass,NgForm],
  providers: []
}) 

export class HeaderComponent implements OnInit {

  isActive = false;
  location : Location;
  error = false;
  token : any;
  //isLoggedIn=false;
  
  constructor(private authentication: Authentication, private _authenticationService: AuthenticationService,
  private router: Router) {
     
  }
  
  ngOnInit() {
      console.info('Loading Header');
      console.info('logged in = '+this.authentication.isLoggedIn);
      //this._authenticationService.isLoggedIn();
      this.loggedIn();
  }
  
  isSelected(path): boolean {
      return location.href.indexOf(path) != -1;
  }


  logout() {
      
    this._authenticationService.logout().subscribe((stat: boolean) => {this.router.navigate( ['ReadBoard'])});
      
  }

  loggedIn() {
    this._authenticationService.isLoggedIn();
    //console.log(this.isLoggedIn);    
  }
  
  onchange(){
    console.log("change");
  }
  
}

