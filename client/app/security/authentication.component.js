System.register(['angular2/core', '../security/authentication.service', '../security/authentication', 'angular2/common', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1, authentication_1, common_1, router_1;
    var AuthenticationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthenticationComponent = (function () {
                function AuthenticationComponent(authentication, _authenticationService, router) {
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
                AuthenticationComponent.prototype.ngOnInit = function () {
                    console.info('Loading Authentication');
                    this.register = false;
                    this.login = true;
                };
                AuthenticationComponent.prototype.onLogin = function (form) {
                    var _this = this;
                    console.info("Login Component ");
                    this._authenticationService.login(form.controls['username'].value, form.controls['password'].value)
                        .subscribe(function (token) {
                        console.info('Loading ReadBoard'), _this.error = false,
                            _this.token = token, _this.authentication.isLoggedIn = true,
                            _this.router.navigate(['ReadBoard']);
                    }, function () { _this.error = true; });
                };
                AuthenticationComponent.prototype.showRegister = function () {
                    this.login = false;
                    this.register = true;
                };
                AuthenticationComponent.prototype.showLogin = function () {
                    this.login = true;
                    this.register = false;
                };
                AuthenticationComponent = __decorate([
                    core_1.Component({
                        selector: 'authentication',
                        templateUrl: 'app/security/authentication.component.html',
                        directives: [common_1.NgClass, common_1.NgForm],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [authentication_1.Authentication, authentication_service_1.AuthenticationService, router_1.Router])
                ], AuthenticationComponent);
                return AuthenticationComponent;
            })();
            exports_1("AuthenticationComponent", AuthenticationComponent);
        }
    }
});
