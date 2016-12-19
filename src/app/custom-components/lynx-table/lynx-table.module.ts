/**
 * Created by sniffer on 19.12.16.
 */
import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { LynxTableComponent } from "./lynx-table/lynx-table.component";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ LynxTableComponent ],
  exports: [ LynxTableComponent ]
})

export class LynxModule { }
