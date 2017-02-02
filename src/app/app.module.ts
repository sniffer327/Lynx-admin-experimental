import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {AppRoutingModule} from "./app.routing";
import {MaterialModule} from "@angular/material";
import {LocalStorageModule} from "angular-2-local-storage";
import {AuthService} from "./Services/auth.service";
import {LynxService} from "./Services/lynx.service";
import {LynxLoggingService} from "./Services/lynx-logging.service";
import {LynxLoginService} from "./Services/lynx-login.service";
import {AuthorizationComponent} from "./authorization/authorization.component";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

    // TODO: Вынести в отдельный модуль
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'lynx-cms',
      storageType: 'localStorage'
    })
  ],
  providers: [
    AuthService,
    LynxService,
    LynxLoggingService,
    LynxLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
