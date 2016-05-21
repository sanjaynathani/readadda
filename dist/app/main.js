"use strict";
const browser_1 = require('angular2/platform/browser');
const http_1 = require('angular2/http');
const app_component_1 = require('./app.component');
require('rxjs/Rx');
const authentication_service_1 = require('./security/authentication.service');
const authentication_1 = require('./security/authentication');
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, authentication_service_1.AuthenticationService, authentication_1.Authentication]);
