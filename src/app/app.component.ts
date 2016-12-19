import { Component, OnInit } from '@angular/core';
import {AuthService} from "./Services/auth.service";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})

export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {

    // Проверка авторизации при запуске приложения
    this.authService.CheckAuth();
  }
}
