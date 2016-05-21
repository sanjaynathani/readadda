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
const router_1 = require('angular2/router');
const common_1 = require('angular2/common');
const authentication_service_1 = require('../security/authentication.service');
const authentication_1 = require('../security/authentication');
let HeaderComponent = class HeaderComponent {
    //isLoggedIn=false;
    constructor(authentication, _authenticationService, router) {
        this.authentication = authentication;
        this._authenticationService = _authenticationService;
        this.router = router;
        this.isActive = false;
        this.error = false;
    }
    ngOnInit() {
        console.info('Loading Header');
        console.info('logged in = ' + this.authentication.isLoggedIn);
        //this._authenticationService.isLoggedIn();
        this.loggedIn();
    }
    isSelected(path) {
        return location.href.indexOf(path) != -1;
    }
    logout() {
        this._authenticationService.logout().subscribe((stat) => { this.router.navigate(['ReadBoard']); });
    }
    loggedIn() {
        this._authenticationService.isLoggedIn();
        //console.log(this.isLoggedIn);    
    }
    onchange() {
        console.log("change");
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'ra-header',
        template: `
    <div class="row">
        <nav role="navigation" class="navbar navbar-default navbar-fixed-top">
            <div class="navbar-header">
                <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a [routerLink]="['ReadBoard']" class="navbar-brand">ReadAdda</a>
            </div>
            <!-- Collection of nav links and other content for toggling -->
            <div id="navbarCollapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li [class.active]="isSelected('/readboard')"><a [routerLink]="['ReadBoard']">ReadBoard</a></li>
                    <li *ngIf="authentication.isLoggedIn" [class.active]="isSelected('/writeboard')"><a [routerLink]="['WriteBoard']">WriteBoard</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right" style="margin-right: 2%; margin-top: 10px;">
                    <!--<li><a href="" data-toggle="modal" data-target="#myModal">&nbsp;&nbsp;Login</a></li>-->
                    <li *ngIf="!authentication.isLoggedIn"><button class="btn btn-primary" [routerLink]="['Authentication']" >Sign-In</button></li>
                    <li *ngIf="authentication.isLoggedIn"><button class="btn btn-primary" (click)="logout()">Sign-out</button></li>
                    <!--<li class="dropdown">

                        <a class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer">Login or Register <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in"></span>&nbsp;&nbsp;Login</a></</li>
                        </ul>
                    </li>-->
                </ul>
            </div>
        </nav>
    </div>
  `,
        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass, common_1.NgForm],
        providers: []
    }), 
    __metadata('design:paramtypes', [authentication_1.Authentication, authentication_service_1.AuthenticationService, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
