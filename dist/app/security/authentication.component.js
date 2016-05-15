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
var core_1 = require('angular2/core');
var authentication_service_1 = require('../security/authentication.service');
var authentication_1 = require('../security/authentication');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var AuthenticationComponent = (function () {
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
            console.info('No error' + token);
            if (token === "") {
                _this.error = true;
            }
            else {
                _this.error = false;
                _this.router.navigate(['ReadBoard']);
            }
        });
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
            template: "\n\n\n    <div style=\"margin-top: 5%;\">\n    <form *ngIf=\"login\" id=\"loginForm\" (ngSubmit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\" >               \n                    <h4 class=\"modal-title\" id=\"myModalLabel\">Sign In</h4>                \n                </div>\n                <div class=\"modal-body\">\n                    <!--<div class=\"form-group\">\n                        <label for=\"usr\" style=\"float: left;height: 20%; width: 10%;\">Name:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"usr\" style=\"height: 20%; width: 50%;\">\n                    </div>-->\n                \n                    <div class=\"form-group\">\n                        <label for=\"username\">Email:</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" required\n                               [(ngModel)]=\"authentication.username\" ngControl=\"username\" #username=\"ngForm\">\n                        <div [hidden]=\"username.valid || username.pristine\" class=\"alert alert-danger\">\n                            Username is required\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"pwd\">Password:</label>\n                        <input type=\"password\" class=\"form-control\" id=\"pwd\" required\n                               [(ngModel)]=\"authentication.password\" ngControl=\"password\" #password=\"ngForm\">\n                        <div [hidden]=\"password.valid || password.pristine\" class=\"alert alert-danger\">\n                            Password is required\n                        </div>\n                    </div>\n                </div>\n            \n                <div *ngIf=\"error\" class=\"alert-danger\"><p style=\"text-align: center;\">Invalid login</p></div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" style=\"float: left\" (click)=showRegister() >Create New Account</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n                </div>\n            </div>\n    </form>\n\n\n\n    <form *ngIf=\"register\" id=\"signUpForm\" (submit)=\"signUp(signUpForm)\" #signUpForm=\"ngForm\">\n    \n        <div class=\"modal-content\" >\n            <div class=\"modal-header\" >\n            \n                <h4 class=\"modal-title\" id=\"myModalLabel\">Register</h4>\n            </div>\n            <div class=\"modal-body\">\n                <!--<div class=\"form-group\">\n                    <label for=\"usr\" style=\"float: left;height: 20%; width: 10%;\">Name:</label>\n                    <input type=\"text\" class=\"form-control\" id=\"usr\" style=\"height: 20%; width: 50%;\">\n                </div>-->\n                <div class=\"form-group\">\n                    <label for=\"pwd\">Email :</label>\n                    <input type=\"password\" class=\"form-control\" id=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"pwd\">Password:</label>\n                    <input type=\"password\" class=\"form-control\" id=\"pwd\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"pwd_renter\">Re-enter Password:</label>\n                    <input type=\"password\" class=\"form-control\" id=\"pwd_renter\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" style=\"float: left\" (click)=showLogin() >Sign-In</button>\n                <button type=\"button\" class=\"btn btn-primary\">Sing Up</button>\n            </div>\n        </div>\n      \n    </form>\n    \n    </div>\n  ",
            directives: [common_1.NgClass, common_1.NgForm],
            providers: []
        }), 
        __metadata('design:paramtypes', [authentication_1.Authentication, authentication_service_1.AuthenticationService, router_1.Router])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVDQUFzQyxvQ0FBb0MsQ0FBQyxDQUFBO0FBQzNFLCtCQUErQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzVELHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBc0ZwRDtJQVNFLGlDQUFtQixjQUE4QixFQUN2QyxzQkFBNkMsRUFBVSxNQUFjO1FBRDVELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVIvRSxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBRWQsZUFBVSxHQUFDLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUMsS0FBSyxDQUFDO1FBQ2YsVUFBSyxHQUFDLElBQUksQ0FBQztRQUtSLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN0Qyw4Q0FBOEM7SUFDakQsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELHlDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQXBCLGlCQVlDO1FBWEMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDaEcsU0FBUyxDQUNSLFVBQUEsS0FBSztZQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSCxLQUFJLENBQUMsS0FBSyxHQUFDLEtBQUssQ0FBQztnQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1lBQUEsQ0FBQztRQUN4QyxDQUFDLENBQ04sQ0FBQztJQUNOLENBQUM7SUFFRCw4Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDJDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBL0hIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLCsxSEE2RVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxnQkFBTyxFQUFDLGVBQU0sQ0FBQztZQUM1QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7OytCQUFBO0lBOENGLDhCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSwrQkFBdUIsMEJBNENuQyxDQUFBIiwiZmlsZSI6InNlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbiB9IGZyb20gJy4uL3NlY3VyaXR5L2F1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHtOZ0NsYXNzLE5nRm9ybX0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZXJ9ICAgICAgICAgICAgICBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdXRoZW50aWNhdGlvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdhdXRoZW50aWNhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW05nQ2xhc3MsTmdGb3JtXSxcclxuICBwcm92aWRlcnM6IFtdXHJcbn0pIFxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgZXJyb3IgPSBmYWxzZTtcclxuICB0b2tlbiA6IGFueTtcclxuICBpc0xvZ2dlZEluPWZhbHNlO1xyXG4gIHJlZ2lzdGVyPWZhbHNlO1xyXG4gIGxvZ2luPXRydWU7XHJcbiAgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoZW50aWNhdGlvbjogQXV0aGVudGljYXRpb24sIFxyXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICBjb25zb2xlLmluZm8oJ0F1dGggQ29tcCBDb25zdHJ1Y3RvcicpOyBcclxuICAgICAvL3RoaXMuYXV0aGVudGljYXRpb24gPSBuZXcgQXV0aGVudGljYXRpb24oKTsgXHJcbiAgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgICBjb25zb2xlLmluZm8oJ0xvYWRpbmcgQXV0aGVudGljYXRpb24nKTtcclxuICAgICAgdGhpcy5yZWdpc3Rlcj1mYWxzZTtcclxuICAgICAgdGhpcy5sb2dpbj10cnVlOyAgICBcclxuICB9XHJcblxyXG4gIG9uTG9naW4oZm9ybTogTmdGb3JtKSB7XHJcbiAgICBjb25zb2xlLmluZm8oXCJMb2dpbiBDb21wb25lbnQgXCIpO1xyXG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKGZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udmFsdWUsIGZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsdWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgdG9rZW4gPT4ge2NvbnNvbGUuaW5mbygnTm8gZXJyb3InK3Rva2VuKTtcclxuICAgICAgICAgICAgaWYodG9rZW4gPT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICB0aGlzLmVycm9yPXRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICB0aGlzLmVycm9yPWZhbHNlO1xyXG4gICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSggWydSZWFkQm9hcmQnXSl9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBzaG93UmVnaXN0ZXIoKXtcclxuICAgIHRoaXMubG9naW49ZmFsc2U7XHJcbiAgICB0aGlzLnJlZ2lzdGVyPXRydWU7XHJcbiAgfVxyXG5cclxuICBzaG93TG9naW4oKXtcclxuICAgIHRoaXMubG9naW49dHJ1ZTtcclxuICAgIHRoaXMucmVnaXN0ZXI9ZmFsc2U7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
