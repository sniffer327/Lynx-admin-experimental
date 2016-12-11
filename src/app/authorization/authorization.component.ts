import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "angular2-cookie/services/cookies.service";

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

          this.cookieService.put('isActivate', 'true');
        },

        error => this.LoginHandler(error)
      );
  }

  private LoginHandler(response: any): void {

    this.AuthCheck();

    if (response != null || response.email != null) {

      this.router.navigate(['/']);

      console.log('Успешная авторизация', response);

    } else {

      console.log('Ошибка авторизации');
    }
  }

  private AuthCheck(): void {

    let res = this.authService.CheckAuth()
      .subscribe(

        res => {
          this.router.navigate(['/']);

          console.log('Проверка авторизации', res);
        },

        error => this.router.navigate(['/auth'])
      );
  }

  ngOnInit() {
    this.AuthCheck();
  }

}
