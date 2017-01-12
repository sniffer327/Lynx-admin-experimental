import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import {MainComponent} from './main/main.component';
import {MdSidenavModule} from "@angular2-material/sidenav";
import {MdCoreModule} from "@angular2-material/core";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdIconModule} from "@angular2-material/icon";
import {ItemsComponent} from './items/items.component';
import {ItemsEditComponent} from './items-edit/items-edit.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {AuthService} from "./Services/auth.service";
import {LynxService} from "./Services/lynx.service";
import {CKEditorModule} from "ng2-ckeditor";
import {ItemImagesComponent} from './custom-components/item-images/item-images.component';
import {MdCheckboxModule} from "@angular2-material/checkbox";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {CanActivateService} from "./Services/can-activate.service";
import {LynxLoggingService} from "./Services/lynx-logging.service";
import {LynxCookiesService} from "./Services/lynx-cookies.service";
import { LayoutComponent } from './layout/layout.component';
import { LynxModule } from './custom-components/lynx-table/lynx-table.module';

@NgModule({

  declarations: [
    AppComponent,
    MainComponent,
    ItemsComponent,
    ItemsEditComponent,
    AuthorizationComponent,
    ItemImagesComponent,
    LayoutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdCardModule,
    MdCheckboxModule,
    CKEditorModule,
    routing,
    LynxModule
  ],

  providers: [
    appRoutingProviders,
    AuthService,
    LynxService,
    CookieService,
    CanActivateService,
    LynxLoggingService,
    LynxCookiesService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
