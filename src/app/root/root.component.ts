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

  constructor(private authService: AuthService,
              private lynxService: LynxService,
              private router: Router,
              private cookieService: CookieService) { }

  public LogOut(event): void {

    event.stopPropagation();

    this.lynxService.Get('/Account/LogOut').subscribe(

      res => {

        this.authService.accountData = null;

        this.cookieService.remove('isActivate');

        this.router.navigate(['/auth']);

      },

      error => console.log(error));

  }

  ngOnInit() {}

}
