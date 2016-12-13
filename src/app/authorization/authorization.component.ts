import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {LynxConstants} from "../lynx-constants";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})

export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private cookieService: CookieService) {
  }


  public Login(login: string, password: string): void {

    this.authService.Login(login, password)
      .subscribe(

        res => {

          this.LoginHandler(res);

          this.cookieService.put(LynxConstants.SessionCookieKey, 'true');
        },

        error => this.LoginHandler(error)
      );
  }

  private LoginHandler(response: any): void {

    if (response != null || response.email != null) {

      this.router.navigate(['/']);

      console.log('Успешная авторизация');

    } else {

      console.log('Ошибка авторизации');
    }
  }

  ngOnInit() {}

}
