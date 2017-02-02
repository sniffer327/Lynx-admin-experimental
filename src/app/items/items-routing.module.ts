import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemsComponent} from "./items.component";

const routes: Routes = [
  {path: '', redirectTo: 'goods', pathMatch: 'full'},
  {path: 'goods', component: ItemsComponent},
  {path: 'news', component: ItemsComponent},
  {path: 'pages', component: ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
