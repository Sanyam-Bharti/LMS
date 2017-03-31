import { Component } from '@angular/core';
// import { LoginComponent} from './login.component';
// import { HomeComponent} from './home.component';
// import {RouteConfig} from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
            <router-outlet></router-outlet>
        `
})
// @RouteConfig([
//     { path: '/home', name: 'Home', component: HomeComponent, useAsDefault:true },
//     { path: '/login', name: 'Login', component: LoginComponent }
// ])
export class AppComponent {}