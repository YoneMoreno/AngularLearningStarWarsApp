import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

/* Feature Modules */
import {LoginModule} from './login/login.module';
import {CoreModule} from '../../core/core.module';
import {CharacterService} from '../../models/character.service';
import {SpinnerModule} from "./core/spinner/spinner.module";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  SpinnerModule,
    LoginModule,
    // Routes get loaded in order. It is important that login
    // come before AppRoutingModule, as
    // AppRoutingModule defines the catch-all ** route
    AppRoutingModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule {
}


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
