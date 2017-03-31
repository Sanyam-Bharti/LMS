import { Component } from '@angular/core';
import { AuthenticationService } from './login.service';
import { User } from './mock-users';

@Component({
    selector: 'login',
    providers:[AuthenticationService],
    template:`
    <div class="container-fluid" style="text-align:center">
    
        <div class="row">
            <div class="title">
                <h1>LMS Login</h1>
            </div>
            </div>
            <div >
                <div class="row">                  
                        <label>Email:</label>                     
                        <input [(ngModel)]="user.email" id="email" 
                            type="email" class="validate">                                 
                </div>
                <br>
                <div class="row">
                    <div>
                        <label>Password:</label>
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        
                    </div>
                </div>
 
                <span style="color:red">{{errorMsg}}</span>
                <br>
                <button (click)="login()" 
                    type="submit" name="action">Login</button>
            </div>
            
        </div>

    `


})
export class LoginComponent{
     public user = new User('','');
    public errorMsg = '';
 
    constructor(
        private _service:AuthenticationService) {}
 
    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}