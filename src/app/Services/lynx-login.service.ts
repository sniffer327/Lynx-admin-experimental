import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

import {LocalStorageService} from "angular-2-local-storage";

import {LynxConstants} from "../lynx-constants";

@Injectable()
export class LynxLoginService {

  constructor(private localStorageService: LocalStorageService,
              private router: Router) { }

  /**
   * Проверка данных авторизации
   * @param key {string} Ключ, который необходимо найти
   * @returns {boolean}
   * @constructor
   */
  public CheckAuthData(key: string): boolean {

    const authCookie = !!this.localStorageService.get(key);

    if (!authCookie) {

      this.router.navigate(['/auth']);

      return false;
    }

    return authCookie;
  }

  /**
   * Уничтожаем данные авторизации
   * @constructor
   */
  public DestroyAuthData(): void {
    this.localStorageService.remove(LynxConstants.SessionCookieKey);
  }
}
