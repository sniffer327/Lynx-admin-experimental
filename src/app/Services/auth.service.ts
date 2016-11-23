import { Injectable } from '@angular/core';
import {LynxService} from "./lynx.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UserInfoModel} from "../Models/user-info-model";

@Injectable()
export class AuthService {

  constructor(private lynxService: LynxService,
              private router: Router) {

    this.accountData = new UserInfoModel();
    this.UserInfoObserveble()
      .subscribe(res => {
        this.accountData = res;
      },
      error => console.log(error));
  }

  public Login(login: string, password: string): any {
    return this.lynxService.Post("/Account/Login", {
      email: login,
      password: password
    });
  }

  public accountData: UserInfoModel;

  /**
   * Получение информации о пользователе
   * @returns {UserInfoModel}
   * @constructor
   */
  public UserInfoObserveble(): Observable<UserInfoModel> {
    return this.lynxService.Get('/Account/UserInfo');
  }

  public UserInfo(): UserInfoModel {
    this.lynxService.Get('/Account/UserInfo').subscribe(
      res => {
        this.accountData = res;
      },
      error => {
        console.log(error);
      });
    return this.accountData;
  }

  public CheckAuth(): Observable<any> {
    let result = this.lynxService.Get('/Account/CheckAuth');
    return result;
  }
}
