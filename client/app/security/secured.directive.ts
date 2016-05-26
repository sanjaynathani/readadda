import { ElementRef, DynamicComponentLoader, Directive, Attribute } from 'angular2/core';
import { Router, RouterOutlet, ComponentInstruction } from 'angular2/router';
import { Authentication } from '../security/authentication';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes;
  private parentRouter: Router;

  constructor(
    _elementRef: ElementRef, _loader: DynamicComponentLoader,
    _parentRouter: Router, @Attribute('name') nameAttr: string,
    private authentication: Authentication
  ) {
      
    super(_elementRef, _loader, _parentRouter, nameAttr);
    console.log("Secure Router Outlet Constructor");
    this.parentRouter = _parentRouter;
    this.publicRoutes = [
      'readboard', 'storyboard', 'authentication'
    ];
  }

  activate(instruction: ComponentInstruction) {
    if (this._canActivate(instruction.urlPath)) {
      return super.activate(instruction);
    }

    this.parentRouter.navigate(['Authentication']);
  }

  _canActivate(url) {
    //console.log(url.substring(0, url.indexOf('/')));
    if(url.indexOf('/') !== -1){
        url = url.substring(0, url.indexOf('/'));
    }
    return this.publicRoutes.indexOf(url) !== -1
        || this.authentication.isLoggedIn;
  }
}