/**
 * Created by Roman on 26.09.2016.
 */
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {ItemsComponent} from "./items/items.component";
import {ItemsEditComponent} from "./items-edit/items-edit.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {CanActivateService} from "./Services/can-activate.service";
import {MainComponent} from "./main/main.component";

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthorizationComponent
    // TODO: подключить data с параметром для отдельного layout
  },
  {
    path: 'items',
    component: ItemsComponent,
    canActivate: [ CanActivateService ]
  },
  {
    path: 'item-edit',
    component: ItemsEditComponent,
    canActivate: [ CanActivateService ]
  },
  {
    path: 'item-edit/:id',
    component: ItemsEditComponent,
    canActivate: [ CanActivateService ]
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [ CanActivateService ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
