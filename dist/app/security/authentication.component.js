"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('angular2/core');
const authentication_service_1 = require('../security/authentication.service');
const authentication_1 = require('../security/authentication');
const common_1 = require('angular2/common');
const router_1 = require('angular2/router');
let AuthenticationComponent = class AuthenticationComponent {
    constructor(authentication, _authenticationService, router) {
        this.authentication = authentication;
        this._authenticationService = _authenticationService;
        this.router = router;
        this.error = false;
        this.isLoggedIn = false;
        this.register = false;
        this.login = true;
        console.info('Auth Comp Constructor');
        //this.authentication = new Authentication(); 
    }
    ngOnInit() {
        console.info('Loading Authentication');
        this.register = false;
        this.login = true;
    }
    onLogin(form) {
        console.info("Login Component ");
        this._authenticationService.login(form.controls['username'].value, form.controls['password'].value)
            .subscribe(token => {
            console.info('No error' + token);
            if (token === "") {
                this.error = true;
            }
            else {
                this.error = false;
                this.router.navigate(['ReadBoard']);
            }
        });
    }
    showRegister() {
        this.login = false;
        this.register = true;
    }
    showLogin() {
        this.login = true;
        this.register = false;
    }
};
AuthenticationComponent = __decorate([
    core_1.Component({
        selector: 'authentication',
        template: `


    <div style="margin-top: 5%;">
    <form *ngIf="login" id="loginForm" (ngSubmit)="onLogin(loginForm)" #loginForm="ngForm">
            <div class="modal-content">
                <div class="modal-header" >               
                    <h4 class="modal-title" id="myModalLabel">Sign In</h4>                
                </div>
                <div class="modal-body">
                    <!--<div class="form-group">
                        <label for="usr" style="float: left;height: 20%; width: 10%;">Name:</label>
                        <input type="text" class="form-control" id="usr" style="height: 20%; width: 50%;">
                    </div>-->
                
                    <div class="form-group">
                        <label for="username">Email:</label>
                        <input type="text" class="form-control" id="name" required
                               [(ngModel)]="authentication.username" ngControl="username" #username="ngForm">
                        <div [hidden]="username.valid || username.pristine" class="alert alert-danger">
                            Username is required
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" required
                               [(ngModel)]="authentication.password" ngControl="password" #password="ngForm">
                        <div [hidden]="password.valid || password.pristine" class="alert alert-danger">
                            Password is required
                        </div>
                    </div>
                </div>
            
                <div *ngIf="error" class="alert-danger"><p style="text-align: center;">Invalid login</p></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" style="float: left" (click)=showRegister() >Create New Account</button>
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
    </form>



    <form *ngIf="register" id="signUpForm" (submit)="signUp(signUpForm)" #signUpForm="ngForm">
    
        <div class="modal-content" >
            <div class="modal-header" >
            
                <h4 class="modal-title" id="myModalLabel">Register</h4>
            </div>
            <div class="modal-body">
                <!--<div class="form-group">
                    <label for="usr" style="float: left;height: 20%; width: 10%;">Name:</label>
                    <input type="text" class="form-control" id="usr" style="height: 20%; width: 50%;">
                </div>-->
                <div class="form-group">
                    <label for="pwd">Email :</label>
                    <input type="password" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd">
                </div>
                <div class="form-group">
                    <label for="pwd_renter">Re-enter Password:</label>
                    <input type="password" class="form-control" id="pwd_renter">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" style="float: left" (click)=showLogin() >Sign-In</button>
                <button type="button" class="btn btn-primary">Sing Up</button>
            </div>
        </div>
      
    </form>
    
    </div>
  `,
        directives: [common_1.NgClass, common_1.NgForm],
        providers: []
    }), 
    __metadata('design:paramtypes', [authentication_1.Authentication, authentication_service_1.AuthenticationService, router_1.Router])
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;
