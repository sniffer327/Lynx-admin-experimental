import { Component, OnInit } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {LynxService} from "../Services/lynx.service";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['root.component.scss']
})

export class RootComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public LogOut(): void {
    this.authService.Logout();
  }

  ngOnInit() {}

}
