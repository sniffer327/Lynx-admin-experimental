import { Component, OnInit } from '@angular/core';
import {AuthService} from "./Services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {}

  public LogOut(): void {
    this.authService.Logout();
  }

  ngOnInit() {
    this.authService.CheckAuth();
  }
}
