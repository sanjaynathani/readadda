System.register(['angular2/core', 'angular2/router', 'angular2/common', '../security/authentication.service', '../security/authentication'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, common_1, authentication_service_1, authentication_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                //isLoggedIn=false;
                function HeaderComponent(authentication, _authenticationService, router) {
                    this.authentication = authentication;
                    this._authenticationService = _authenticationService;
                    this.router = router;
                    this.isActive = false;
                    this.error = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    console.info('Loading Header');
                    console.info('logged in = ' + this.authentication.isLoggedIn);
                    //this._authenticationService.isLoggedIn();
                    //this.loggedIn();
                };
                HeaderComponent.prototype.isSelected = function (path) {
                    return location.href.indexOf(path) != -1;
                };
                HeaderComponent.prototype.logout = function () {
                    var _this = this;
                    this._authenticationService.logout().subscribe(function (stat) { _this.router.navigate(['ReadBoard']); });
                };
                HeaderComponent.prototype.loggedIn = function () {
                    this._authenticationService.isLoggedIn();
                    //console.log(this.isLoggedIn);    
                };
                HeaderComponent.prototype.onchange = function () {
                    console.log("change");
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'ra-header',
                        templateUrl: 'app/layout/header.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass, common_1.NgForm],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [authentication_1.Authentication, authentication_service_1.AuthenticationService, router_1.Router])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
