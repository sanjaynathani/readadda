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
var header_component_1 = require('./header.component');
var center_component_1 = require('./center.component');
var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        console.info('Loading Layout');
    };
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'ra-layout',
            template: '<ra-header>Loading..</ra-header><ra-center>Loading...</ra-center>',
            directives: [header_component_1.HeaderComponent, center_component_1.CenterComponent, router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQW9ELGlCQUFpQixDQUFDLENBQUE7QUFDdEUsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFDckQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFXckQ7SUFBQTtJQU1BLENBQUM7SUFKQyxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFiSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsbUVBQW1FO1lBQzdFLFVBQVUsRUFBRSxDQUFDLGtDQUFlLEVBQUMsa0NBQWUsRUFBQywwQkFBaUIsQ0FBQztZQUMvRCxTQUFTLEVBQUU7Z0JBQ1QseUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQzs7dUJBQUE7SUFRRixzQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksdUJBQWUsa0JBTTNCLENBQUEiLCJmaWxlIjoibGF5b3V0L2xheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUk9WSURFUlMgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENlbnRlckNvbXBvbmVudCB9IGZyb20gJy4vY2VudGVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhLWxheW91dCcsXG4gIHRlbXBsYXRlOiAnPHJhLWhlYWRlcj5Mb2FkaW5nLi48L3JhLWhlYWRlcj48cmEtY2VudGVyPkxvYWRpbmcuLi48L3JhLWNlbnRlcj4nLFxuICBkaXJlY3RpdmVzOiBbSGVhZGVyQ29tcG9uZW50LENlbnRlckNvbXBvbmVudCxST1VURVJfRElSRUNUSVZFU10sXG4gIHByb3ZpZGVyczogW1xuICAgIFJPVVRFUl9QUk9WSURFUlNcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIExheW91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0xvYWRpbmcgTGF5b3V0Jyk7XG4gIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
