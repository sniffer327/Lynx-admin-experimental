import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from "./app.routing";
import { RootComponent } from './root/root.component';
import { MainComponent } from './main/main.component';
import {MdSidenavModule} from "@angular2-material/sidenav";
import {MdCoreModule} from "@angular2-material/core";
import {MdButtonModule} from "@angular2-material/button";
import {MdCardModule} from "@angular2-material/card";
import {MdToolbarModule} from "@angular2-material/toolbar";
import {MdIconModule, MdIconRegistry} from "@angular2-material/icon";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    MainComponent
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
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
