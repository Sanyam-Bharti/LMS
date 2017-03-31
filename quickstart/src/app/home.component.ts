import { Component } from '@angular/core';
import { AuthenticationService } from './login.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" >
                <div>
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
    	`
})
 
export class HomeComponent {
 
    constructor(
        private _service:AuthenticationService){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}