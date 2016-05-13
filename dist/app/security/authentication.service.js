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
var Observable_1 = require('rxjs/Observable');
var authentication_1 = require('./authentication');
var http_1 = require('angular2/http');
var AuthenticationService = (function () {
    function AuthenticationService(authentication, http) {
        this.authentication = authentication;
        this.http = http;
        this.loginDataUrl = location.origin + '/libs/data/loginData.json';
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
        var _this = this;
        /*if (username === 'test' && password === 'test') {
          this.token = 'token';
          
          localStorage.setItem('token', this.token);
          localStorage.setItem('username', username);
          this.authentication.password="";
          return Observable.of('token');
        }
    
        return Observable.throw('authentication failure');*/
        return this.http.get(this.loginDataUrl)
            .map(function (res) { return _this.handleLogin(res, username, password); })
            .do(function (data) { return console.log(data); })
            .catch(this.handleError);
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
    AuthenticationService.prototype.handleLogin = function (res, username, password) {
        var auth = res.json().loginData;
        console.log("Passed parameter :" + username + " " + password);
        console.log("Auth parameter :" + auth.username + " " + auth.password);
        if (auth.username === username && auth.password === password) {
            this.token = 'token';
            this.authentication.username = username;
            this.authentication.isLoggedIn = true;
            localStorage.setItem('token', this.token);
            localStorage.setItem('username', username);
            this.authentication.password = "";
            console.log("Is LoggedIn success :" + this.authentication.isLoggedIn);
            return this.token;
        }
        else {
            this.authentication.isLoggedIn = false;
            console.log("Is LoggedIn failed :" + this.authentication.isLoggedIn);
            return "";
        }
    };
    AuthenticationService.prototype.handleError = function (res) {
        return Observable_1.Observable.throw('authentication failure');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [authentication_1.Authentication, http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5L2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QywyQkFBeUIsaUJBQWlCLENBQUMsQ0FBQTtBQUMzQywrQkFBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUNoRCxxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFHN0M7SUFJRSwrQkFBb0IsY0FBOEIsRUFBVSxJQUFVO1FBQWxELG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGOUQsaUJBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLDJCQUEyQixDQUFDO1FBR25FLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLFFBQWdCLEVBQUUsUUFBZ0I7UUFDdEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWtCRTtRQW5CSixpQkFvQ0M7UUFmQzs7Ozs7Ozs7OzREQVNvRDtRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUM5QixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQXpDLENBQXlDLENBQUM7YUFDckQsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzthQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ0U7Ozs7Ozs7Ozs7OztXQVlHO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDdkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUMsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QseUNBQXlDO0lBQzNDLENBQUM7SUFFTywyQ0FBVyxHQUFuQixVQUFvQixHQUFhLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtRQUNuRSxJQUFJLElBQUksR0FBbUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFDLFFBQVEsR0FBQyxHQUFHLEdBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFDLFFBQVEsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUM7WUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFDLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEdBQUMsS0FBSyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFFTywyQ0FBVyxHQUFuQixVQUFvQixHQUFhO1FBQy9CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFwR0g7UUFBQyxpQkFBVSxFQUFFOzs2QkFBQTtJQXVHYiw0QkFBQztBQUFELENBdEdBLEFBc0dDLElBQUE7QUF0R1ksNkJBQXFCLHdCQXNHakMsQ0FBQSIsImZpbGUiOiJzZWN1cml0eS9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7QXV0aGVudGljYXRpb259IGZyb20gJy4vYXV0aGVudGljYXRpb24nO1xuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICB0b2tlbjogc3RyaW5nO1xuICBwcml2YXRlIGxvZ2luRGF0YVVybCA9IGxvY2F0aW9uLm9yaWdpbiArICcvbGlicy9kYXRhL2xvZ2luRGF0YS5qc29uJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhlbnRpY2F0aW9uOiBBdXRoZW50aWNhdGlvbiwgcHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gICAgdGhpcy50b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICB9XG5cbiAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIC8qXG4gICAgICogSWYgd2UgaGFkIGEgbG9naW4gYXBpLCB3ZSB3b3VsZCBoYXZlIGRvbmUgc29tZXRoaW5nIGxpa2UgdGhpc1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXV0aC9sb2dpbicsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLCB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLm1hcCgocmVzIDogYW55KSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmpzb24oKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IGRhdGEudG9rZW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMudG9rZW4pO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciB0aGUgcHVycG9zZSBvZiB0aGlzIGNvb2tib29rLCB3ZSB3aWxsIGp1c3RlIHNpbXVsYXRlIHRoYXRcbiAgICAqL1xuXG4gICAgLyppZiAodXNlcm5hbWUgPT09ICd0ZXN0JyAmJiBwYXNzd29yZCA9PT0gJ3Rlc3QnKSB7XG4gICAgICB0aGlzLnRva2VuID0gJ3Rva2VuJztcbiAgICAgIFxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdGhpcy50b2tlbik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnBhc3N3b3JkPVwiXCI7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZigndG9rZW4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnYXV0aGVudGljYXRpb24gZmFpbHVyZScpOyovXG4gICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5sb2dpbkRhdGFVcmwpXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB0aGlzLmhhbmRsZUxvZ2luKHJlcywgdXNlcm5hbWUsIHBhc3N3b3JkKSlcbiAgICAgICAgICAgIC5kbyhkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIC8qXG4gICAgICogSWYgd2UgaGFkIGEgbG9naW4gYXBpLCB3ZSB3b3VsZCBoYXZlIGRvbmUgc29tZXRoaW5nIGxpa2UgdGhpc1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWcuc2VydmVyVXJsICsgJy9hdXRoL2xvZ291dCcsIHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgJ3gtc2VjdXJpdHktdG9rZW4nOiB0aGlzLnRva2VuXG4gICAgICB9KVxuICAgIH0pXG4gICAgLm1hcCgocmVzIDogYW55KSA9PiB7XG4gICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgfSk7XG4gICAgICovXG5cbiAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VybmFtZScpO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb24uaXNMb2dnZWRJbj1mYWxzZTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnVzZXJuYW1lPVwiXCI7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvbi5wYXNzd29yZD1cIlwiO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHRydWUpO1xuICB9XG4gIFxuICBpc0xvZ2dlZEluKCkge1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTtcbiAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnVzZXJuYW1lPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpO1xuICAgIHRoaXMuYXV0aGVudGljYXRpb24uaXNMb2dnZWRJbj0hIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgIC8vcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvZ2luKHJlczogUmVzcG9uc2UsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpe1xuICAgIGxldCBhdXRoID0gPEF1dGhlbnRpY2F0aW9uPnJlcy5qc29uKCkubG9naW5EYXRhO1xuICAgIGNvbnNvbGUubG9nKFwiUGFzc2VkIHBhcmFtZXRlciA6XCIrdXNlcm5hbWUrXCIgXCIrcGFzc3dvcmQpO1xuICAgIGNvbnNvbGUubG9nKFwiQXV0aCBwYXJhbWV0ZXIgOlwiK2F1dGgudXNlcm5hbWUrXCIgXCIrYXV0aC5wYXNzd29yZCk7XG4gICAgaWYgKGF1dGgudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIGF1dGgucGFzc3dvcmQgPT09IHBhc3N3b3JkKSB7XG4gICAgICB0aGlzLnRva2VuID0gJ3Rva2VuJztcbiAgICAgIHRoaXMuYXV0aGVudGljYXRpb24udXNlcm5hbWU9dXNlcm5hbWU7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLmlzTG9nZ2VkSW49dHJ1ZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRoaXMudG9rZW4pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5wYXNzd29yZD1cIlwiO1xuICAgICAgY29uc29sZS5sb2coXCJJcyBMb2dnZWRJbiBzdWNjZXNzIDpcIit0aGlzLmF1dGhlbnRpY2F0aW9uLmlzTG9nZ2VkSW4pO1xuICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLmlzTG9nZ2VkSW49ZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZyhcIklzIExvZ2dlZEluIGZhaWxlZCA6XCIrdGhpcy5hdXRoZW50aWNhdGlvbi5pc0xvZ2dlZEluKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuICBcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihyZXM6IFJlc3BvbnNlKXtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdygnYXV0aGVudGljYXRpb24gZmFpbHVyZScpO1xuICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
