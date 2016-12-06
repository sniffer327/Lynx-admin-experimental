import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import {RootComponent} from './root/root.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    MainComponent,
    ItemsComponent,
    ItemsEditComponent,
    AuthorizationComponent,
    ItemImagesComponent
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
    routing
  ],
  providers: [
    appRoutingProviders,
    AuthService,
    LynxService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
