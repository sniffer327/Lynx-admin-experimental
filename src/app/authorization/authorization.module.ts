import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';

import {AuthorizationComponent} from "./authorization.component";
import {AuthorizationRoutingModule} from "./authorization.routing";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule {}
