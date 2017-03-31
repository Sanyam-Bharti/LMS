import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { LoginComponent} from './login.component';
import { HomeComponent} from './home.component';

@NgModule({
  imports:      [ BrowserModule ,
       RouterModule,
       FormsModule,
       RouterModule.forRoot([
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        }
    ]) ],
  declarations: [ AppComponent , LoginComponent , HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
