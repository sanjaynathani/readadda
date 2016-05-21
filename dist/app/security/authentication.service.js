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
const Observable_1 = require('rxjs/Observable');
const authentication_1 = require('./authentication');
const http_1 = require('angular2/http');
let loggedIn;
let AuthenticationService = class AuthenticationService {
    constructor(authentication, http) {
        this.authentication = authentication;
        this.http = http;
        this.loginDataUrl = location.origin + '/libs/data/loginData.json';
        console.log("Authentication Service constructor");
        this.token = localStorage.getItem('token');
        this.isLoggedIn();
        loggedIn = this.authentication.isLoggedIn;
    }
    login(username, password) {
        /*
         * If we had a login api, we would have done something like this
    
        return this.http.post('/auth/login', JSON.stringify({
            username: username,
            password: password
          }), {
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
          .map((res : any) => {
            let data = res.json();
            this.token = data.token;
            localStorage.setItem('token', this.token);
          });
    
          for the purpose of this cookbook, we will juste simulate that
        */
        /*if (username === 'test' && password === 'test') {
          this.token = 'token';
          
          localStorage.setItem('token', this.token);
          localStorage.setItem('username', username);
          this.authentication.password="";
          return Observable.of('token');
        }
    
        return Observable.throw('authentication failure');*/
        return this.http.get(this.loginDataUrl)
            .map(res => this.handleLogin(res, username, password))
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    logout() {
        /*
         * If we had a login api, we would have done something like this
    
        return this.http.get(this.config.serverUrl + '/auth/logout', {
          headers: new Headers({
            'x-security-token': this.token
          })
        })
        .map((res : any) => {
          this.token = undefined;
          localStorage.removeItem('token');
        });
         */
        this.token = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.authentication.isLoggedIn = false;
        this.authentication.username = "";
        this.authentication.password = "";
        loggedIn = false;
        return Observable_1.Observable.of(true);
    }
    isLoggedIn() {
        console.log(localStorage.getItem('token'));
        this.authentication.username = localStorage.getItem('username');
        this.authentication.isLoggedIn = !!localStorage.getItem('token');
        //return !!localStorage.getItem('token');
    }
    handleLogin(res, username, password) {
        let auth = res.json().loginData;
        console.log("Passed parameter :" + username + " " + password);
        console.log("Auth parameter :" + auth.username + " " + auth.password);
        if (auth.username === username && auth.password === password) {
            this.token = 'token';
            this.authentication.username = username;
            this.authentication.isLoggedIn = true;
            localStorage.setItem('token', this.token);
            localStorage.setItem('username', username);
            this.authentication.password = "";
            console.log("Is LoggedIn success :" + this.authentication.isLoggedIn);
            loggedIn = true;
            return this.token;
        }
        else {
            this.authentication.isLoggedIn = false;
            console.log("Is LoggedIn failed :" + this.authentication.isLoggedIn);
            loggedIn = false;
            return "";
        }
    }
    handleError(res) {
        return Observable_1.Observable.throw('authentication failure');
    }
};
AuthenticationService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [authentication_1.Authentication, http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
function isLoggedIn() {
    console.log("----" + loggedIn + "----");
    return loggedIn;
}
exports.isLoggedIn = isLoggedIn;
