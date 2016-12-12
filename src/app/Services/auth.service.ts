import {Injectable} from '@angular/core';
import {LynxService} from "./lynx.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserInfoModel} from "../Models/user-info.model";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class AuthService {

  constructor(private lynxService: LynxService,
              private cookieService: CookieService,
              private router: Router) {}

  // Главный login обработчик
  public Login(login: string, password: string): any {
    return this.lynxService.Post("/Account/Login", {
      email: login,
      password: password
    });
  }

  // Главный logout обработчик
  public Logout(): void {

    this.lynxService.Get('/Account/LogOut').subscribe(

      () => {

        this.cookieService.remove('isActivate');

        this.router.navigate(['/auth']);

      },

      error => console.log(error)
    );
  }

  // Проверка авторизации
  public CheckAuth(): Observable<any> {
    return this.lynxService.Get('/Account/CheckAuth');
  }

  // Проверка cookies авторизации
  public CheckAuthCookies(key: string): boolean {

    const authCookie = !!this.cookieService.get(key);

    if (!authCookie) {

      this.router.navigate(['/auth']);

      return false;
    }

    return authCookie;
  }
}
