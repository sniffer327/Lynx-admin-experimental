import { Injectable } from '@angular/core';
import {LynxConstants} from "../lynx-constants";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {Router} from "@angular/router";

@Injectable()
export class LynxCookiesService {

  constructor(private cookieService: CookieService,
              private router: Router) { }

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
  public DestroyAuthCookies(): void {
    this.cookieService.remove(LynxConstants.SessionCookieKey);
  }
}
