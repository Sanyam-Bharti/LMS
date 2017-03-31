import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './mock-users';

var users=[
    new User('user123@gmail.com','user123'),
    new User('admin123@gmail.com','admin123')
];

@Injectable()
export class AuthenticationService {
     constructor(private _router: Router){}

    login(user: User){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['home']);      
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['login']);
    }
  } 
}