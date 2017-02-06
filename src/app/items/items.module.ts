import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import {MaterialModule} from "@angular/material";
import {ItemsComponent} from "./items.component";
import {ItemsRoutingModule} from "./items-routing.module";
import {LynxTableModule} from "../Shared/lynx-table/lynx-table.module";
import {ItemsEditComponent} from "./items-edit.component";
import {FormsModule} from "@angular/forms";
import {CKEditorModule} from "ng2-ckeditor";
import {ItemImagesComponent} from "../Shared/item-images/item-images.component";
import {DragulaModule} from "ng2-dragula";

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    MaterialModule,
    LynxTableModule,
    CKEditorModule,
    DragulaModule
  ],
  declarations: [
    ItemsComponent,
    ItemsEditComponent,
    ItemImagesComponent
  ]
})
export class ItemsModule {}
