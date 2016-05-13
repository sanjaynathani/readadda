System.register(['angular2/platform/browser', 'angular2/http', './app.component', 'rxjs/Rx', './security/authentication.service', './security/authentication'], function(exports_1) {
    var browser_1, http_1, app_component_1, authentication_service_1, authentication_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {},
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (authentication_1_1) {
                authentication_1 = authentication_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, authentication_service_1.AuthenticationService, authentication_1.Authentication]);
        }
    }
});
