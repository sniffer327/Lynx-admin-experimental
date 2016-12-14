import { Component, OnInit } from '@angular/core';
import {AuthService} from "./Services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {

    // Проверка авторизации при запуске приложения
    this.authService.CheckAuth();
  }
}
