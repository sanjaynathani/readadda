System.register(['angular2/core', 'rxjs/Observable', './authentication'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, authentication_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(authentication) {
                    this.authentication = authentication;
                    this.token = localStorage.getItem('token');
                }
                AuthenticationService.prototype.login = function (username, password) {
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
                    if (username === 'test' && password === 'test') {
                        this.token = 'token';
                        localStorage.setItem('token', this.token);
                        localStorage.setItem('username', username);
                        this.authentication.password = "";
                        return Observable_1.Observable.of('token');
                    }
                    return Observable_1.Observable.throw('authentication failure');
                };
                AuthenticationService.prototype.logout = function () {
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
                    return Observable_1.Observable.of(true);
                };
                AuthenticationService.prototype.isLoggedIn = function () {
                    console.log(localStorage.getItem('token'));
                    this.authentication.username = localStorage.getItem('username');
                    this.authentication.isLoggedIn = !!localStorage.getItem('token');
                    //return !!localStorage.getItem('token');
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [authentication_1.Authentication])
                ], AuthenticationService);
                return AuthenticationService;
            })();
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
