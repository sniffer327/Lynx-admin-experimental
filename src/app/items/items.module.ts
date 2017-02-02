import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import {MaterialModule} from "@angular/material";
import {ItemsComponent} from "./items.component";
import {ItemsRoutingModule} from "./items-routing.module";
import {LynxTableModule} from "../Shared/lynx-table/lynx-table.module";

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MaterialModule,
    LynxTableModule
  ],
  declarations: [
    ItemsComponent
  ]
})
export class ItemsModule {}
