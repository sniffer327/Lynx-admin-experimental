import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

export const routes: Routes = [
  // Основной Layout
  {
    path: '',
    component: LayoutComponent
  },

  // Некорректный маршрут
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
