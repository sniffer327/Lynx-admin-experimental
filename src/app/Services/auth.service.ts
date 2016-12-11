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


  // Main login handler
  public Login(login: string, password: string): any {
    return this.lynxService.Post("/Account/Login", {
      email: login,
      password: password
    });
  }


  // Проверка авторизации
  public CheckAuth(): Observable<any> {
    return this.lynxService.Get('/Account/CheckAuth');
  }


  // Проверка cookie авторизации
  public CheckAuthCookies(key: string): boolean {

    const authCookie = !!this.cookieService.get(key);

    if (!authCookie) {

      this.router.navigate(['/auth']);

      return false;
    }

    return authCookie;
  }
}
