import { Component, OnInit } from 'angular2/core';
import { AuthenticationService } from '../security/authentication.service';
import { Authentication } from '../security/authentication';
import {NgClass,NgForm} from 'angular2/common';
import {Router}              from 'angular2/router';

@Component({
  selector: 'authentication',
  templateUrl: 'authentication.component.html',
  directives: [NgClass,NgForm],
  providers: []
}) 

export class AuthenticationComponent implements OnInit {

  error = false;
  token : any;
  isLoggedIn=false;
  register=false;
  login=true;
  

  constructor(public authentication: Authentication, 
    private _authenticationService: AuthenticationService, private router: Router) {
     console.info('Auth Comp Constructor'); 
     //this.authentication = new Authentication(); 
  }
  
  ngOnInit() {
      console.info('Loading Authentication');
      this.register=false;
      this.login=true;    
  }

  onLogin(form: NgForm) {
    console.info("Login Component ");
    this._authenticationService.login(form.controls['username'].value, form.controls['password'].value)
      .subscribe(
        token => {console.info('No error'+token);
            if(token === ""){
               this.error=true;
            }else{
               this.error=false;
               this.router.navigate( ['ReadBoard'])} 
            }
      );
  }

  showRegister(){
    this.login=false;
    this.register=true;
  }

  showLogin(){
    this.login=true;
    this.register=false;
  }
}