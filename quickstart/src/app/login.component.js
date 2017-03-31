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
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var mock_users_1 = require("./mock-users");
var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = new mock_users_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        providers: [login_service_1.AuthenticationService],
        template: "\n    <div class=\"container-fluid\" style=\"text-align:center\">\n    \n        <div class=\"row\">\n            <div class=\"title\">\n                <h1>LMS Login</h1>\n            </div>\n            </div>\n            <div >\n                <div class=\"row\">                  \n                        <label>Email:</label>                     \n                        <input [(ngModel)]=\"user.email\" id=\"email\" \n                            type=\"email\" class=\"validate\">                                 \n                </div>\n                <br>\n                <div class=\"row\">\n                    <div>\n                        <label>Password:</label>\n                        <input [(ngModel)]=\"user.password\" id=\"password\" \n                            type=\"password\" class=\"validate\">\n                        \n                    </div>\n                </div>\n \n                <span style=\"color:red\">{{errorMsg}}</span>\n                <br>\n                <button (click)=\"login()\" \n                    type=\"submit\" name=\"action\">Login</button>\n            </div>\n            \n        </div>\n\n    "
    }),
    __metadata("design:paramtypes", [login_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map