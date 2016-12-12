import {Injectable} from '@angular/core';
import {LynxService} from "./lynx.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {LynxLoggingService} from "./lynx-logging.service";
import {LynxConstants} from "../lynx-constants";

@Injectable()
export class AuthService {

  constructor(private lynxService: LynxService,
              private cookieService: CookieService,
              private router: Router) {}

  /**
   * Главный LogIn обработчик
   * @param login {String} Логин
   * @param password {String} Пароль
   * @returns {Observable<any>}
   * @constructor
   */
  public Login(login: string, password: string): any {
    return this.lynxService.Post("/Account/Login", {
      email: login,
      password: password
    });
  }

  /**
   * Главный LogOut обработчик
   * @constructor
   */
  public Logout(): void {

    this.lynxService.Get('/Account/LogOut').subscribe(

      () => {

        this.DestroyAuthCookies();

        this.router.navigate(['/auth']);

      },

      error => LynxLoggingService.Log('Ошибка LogOut ', error)
    );
  }

  /**
   * Проверка авторизации
   * @returns {Observable<any>}
   * @constructor
   */
  public CheckAuth(): Observable<any> {
    return this.lynxService.Get('/Account/CheckAuth');
  }

  /**
   * Проверка cookies авторизации
   * @param key {string} Ключ, который необходимо найти
   * @returns {boolean}
   * @constructor
   */
  public CheckAuthCookies(key: string): boolean {

    const authCookie = !!this.cookieService.get(key);

    if (!authCookie) {

      this.router.navigate(['/auth']);

      return false;
    }

    return authCookie;
  }

  /**
   * Уничтожаем Cookie авторизации
   * @constructor
   */
  public DestroyAuthCookies() {
    this.cookieService.remove(LynxConstants.SessionCookieKey);
  }
}
