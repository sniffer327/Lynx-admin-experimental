import {Injectable} from '@angular/core';
import {LynxService} from "./lynx.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {LynxLoggingService} from "./lynx-logging.service";
import {LynxCookiesService} from "./lynx-cookies.service";

@Injectable()
export class AuthService {

  constructor(private lynxService: LynxService,
              private router: Router,
              private cookies: LynxCookiesService) {
  }

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

        this.cookies.DestroyAuthCookies();

        this.router.navigate(['/auth']);

        LynxLoggingService.Log('Выход из аккаунта');
      },

      error => LynxLoggingService.Log('Ошибка LogOut ', error)
    );
  }


  public CheckAuth(): void {

    this.CheckUserAuth()
      .subscribe(

        res => {
          LynxLoggingService.Log('Проверка авторизации ', res);
        },

        () => {

          this.router.navigate(['/auth']);

          LynxLoggingService.Error('Пользователь не авторизован');
        }
      );
  }

  /**
   * Проверка авторизации
   * @returns {Observable<any>}
   * @constructor
   */
  private CheckUserAuth(): Observable<any> {
    return this.lynxService.Get('/Account/CheckAuth');
  }
}
