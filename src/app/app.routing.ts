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
import {LayoutComponent} from "./layout/layout.component";

const appRoutes: Routes = [

  // Страница авторизации
  {
    path: 'auth',
    component: AuthorizationComponent
  },

  // Основной layout
  {
    path: '',
    component: LayoutComponent,
    canActivate: [ CanActivateService ],
    children: [

      // Главная страница
      {
        path: '',
        component: MainComponent
      },

      // Страница со списком товаров
      {
        path: 'items',
        component: ItemsComponent
      },

      // Страница со списком страниц
      {
        path: 'pages',
        component: ItemsComponent
      },

      // Страница со списком новостей
      {
        path: 'news',
        component: ItemsComponent
      },

      // Страница добавления товара
      {
        path: 'item-edit',
        component: ItemsEditComponent
      },

      // Страница добавления страницы
      {
        path: 'page-edit',
        component: ItemsEditComponent
      },

      // Страница добавления новости
      {
        path: 'news-edit',
        component: ItemsEditComponent
      },

      // Страница редактирования товара
      {
        path: 'item-edit/:id',
        component: ItemsEditComponent
      },
      // Страница редактирования страницы
      {
        path: 'page-edit/:id',
        component: ItemsEditComponent
      },
      // Страница редактирования новости
      {
        path: 'news-edit/:id',
        component: ItemsEditComponent
      },
    ]
  },

  // Некорректный маршрут
  {
    path: '**',
    redirectTo: '/'
  }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
