import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import 'rxjs/Rx';
import { AuthenticationService } from './security/authentication.service';
import { Authentication } from './security/authentication';

bootstrap(AppComponent, [HTTP_PROVIDERS, AuthenticationService, Authentication]);