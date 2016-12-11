/**
 * Created by Roman on 26.09.2016.
 */
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {RootComponent} from "./root/root.component";
import {MainComponent} from "./main/main.component";
import {ItemsComponent} from "./items/items.component";
import {ItemsEditComponent} from "./items-edit/items-edit.component";
import {AuthorizationComponent} from "./authorization/authorization.component";
import {CanActivateService} from "./Services/can-activate.service";

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AppComponent,
    children: [
      {
        path: '', component: AuthorizationComponent
      }
    ]
  },
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: '',
    component: RootComponent,
    canActivate: [ CanActivateService ],
    children: [
      {
        path: '',
        component: MainComponent
      }
    ]
  },
  {
    path: 'items',
    component: RootComponent,
    canActivate: [ CanActivateService ],
    children: [
      {
        path: '',
        component: ItemsComponent
      }
    ]
  },
  {
    path: 'item-edit',
    component: RootComponent,
    canActivate: [ CanActivateService ],
    children: [
      {
        path: '',
        component: ItemsEditComponent
      }
    ]
  },
  {
    path: 'item-edit/:id',
    component: RootComponent,
    canActivate: [ CanActivateService ],
    children: [
      {
        path: '',
        component: ItemsEditComponent
      }
    ]
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
