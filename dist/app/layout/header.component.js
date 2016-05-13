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
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var authentication_service_1 = require('../security/authentication.service');
var authentication_1 = require('../security/authentication');
var HeaderComponent = (function () {
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
        this.loggedIn();
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
            template: "\n    <div class=\"row\">\n        <nav role=\"navigation\" class=\"navbar navbar-default navbar-fixed-top\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\" class=\"navbar-toggle\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a [routerLink]=\"['ReadBoard']\" class=\"navbar-brand\">ReadAdda</a>\n            </div>\n            <!-- Collection of nav links and other content for toggling -->\n            <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li [class.active]=\"isSelected('/readboard')\"><a [routerLink]=\"['ReadBoard']\">ReadBoard</a></li>\n                    <li *ngIf=\"authentication.isLoggedIn\" [class.active]=\"isSelected('/writeboard')\"><a [routerLink]=\"['WriteBoard']\">WriteBoard</a></li>\n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2%; margin-top: 10px;\">\n                    <!--<li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\">&nbsp;&nbsp;Login</a></li>-->\n                    <li *ngIf=\"!authentication.isLoggedIn\"><button class=\"btn btn-primary\" [routerLink]=\"['Authentication']\" >Sign-In</button></li>\n                    <li *ngIf=\"authentication.isLoggedIn\"><button class=\"btn btn-primary\" (click)=\"logout()\">Sign-out</button></li>\n                    <!--<li class=\"dropdown\">\n\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" style=\"cursor: pointer\">Login or Register <span class=\"caret\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"\" data-toggle=\"modal\" data-target=\"#myModal\"><span class=\"glyphicon glyphicon-log-in\"></span>&nbsp;&nbsp;Login</a></</li>\n                        </ul>\n                    </li>-->\n                </ul>\n            </div>\n        </nav>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, common_1.NgClass, common_1.NgForm],
            providers: []
        }), 
        __metadata('design:paramtypes', [authentication_1.Authentication, authentication_service_1.AuthenticationService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEMsZUFBZSxDQUFDLENBQUE7QUFDMUQsdUJBQW9ELGlCQUFpQixDQUFDLENBQUE7QUFDdEUsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsdUNBQXNDLG9DQUFvQyxDQUFDLENBQUE7QUFDM0UsK0JBQStCLDRCQUE0QixDQUFDLENBQUE7QUEwQzVEO0lBTUUsbUJBQW1CO0lBRW5CLHlCQUFvQixjQUE4QixFQUFVLHNCQUE2QyxFQUNqRyxNQUFjO1FBREYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF1QjtRQUNqRyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHRCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsVUFBSyxHQUFHLEtBQUssQ0FBQztJQU9kLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLElBQUk7UUFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUdELGdDQUFNLEdBQU47UUFBQSxpQkFJQztRQUZDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFhLElBQU0sS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFFNUcsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsbUNBQW1DO0lBQ3JDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBOUVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSw4ckVBaUNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUMsZ0JBQU8sRUFBQyxlQUFNLENBQUM7WUFDOUMsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDOzt1QkFBQTtJQTBDRixzQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksdUJBQWUsa0JBd0MzQixDQUFBIiwiZmlsZSI6ImxheW91dC9oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIExvY2F0aW9uLCBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtOZ0NsYXNzLE5nRm9ybX0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tICcuLi9zZWN1cml0eS9hdXRoZW50aWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLE5nQ2xhc3MsTmdGb3JtXSxcbiAgcHJvdmlkZXJzOiBbXVxufSkgXG5cbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGlzQWN0aXZlID0gZmFsc2U7XG4gIGxvY2F0aW9uIDogTG9jYXRpb247XG4gIGVycm9yID0gZmFsc2U7XG4gIHRva2VuIDogYW55O1xuICAvL2lzTG9nZ2VkSW49ZmFsc2U7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uOiBBdXRoZW50aWNhdGlvbiwgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgXG4gIH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICAgICAgY29uc29sZS5pbmZvKCdMb2FkaW5nIEhlYWRlcicpO1xuICAgICAgY29uc29sZS5pbmZvKCdsb2dnZWQgaW4gPSAnK3RoaXMuYXV0aGVudGljYXRpb24uaXNMb2dnZWRJbik7XG4gICAgICAvL3RoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgICB0aGlzLmxvZ2dlZEluKCk7XG4gIH1cbiAgXG4gIGlzU2VsZWN0ZWQocGF0aCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uLmhyZWYuaW5kZXhPZihwYXRoKSAhPSAtMTtcbiAgfVxuXG5cbiAgbG9nb3V0KCkge1xuICAgICAgXG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZSgoc3RhdDogYm9vbGVhbikgPT4ge3RoaXMucm91dGVyLm5hdmlnYXRlKCBbJ1JlYWRCb2FyZCddKX0pO1xuICAgICAgXG4gIH1cblxuICBsb2dnZWRJbigpIHtcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UuaXNMb2dnZWRJbigpO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5pc0xvZ2dlZEluKTsgICAgXG4gIH1cbiAgXG4gIG9uY2hhbmdlKCl7XG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIik7XG4gIH1cbiAgXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
