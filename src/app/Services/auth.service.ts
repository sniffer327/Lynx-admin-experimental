import { Injectable } from '@angular/core';
import {LynxService} from "./lynx.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private lynxService: LynxService,
              private router: Router) {
  }

  public Login(login: string, password: string): Observable<any> {
    return this.lynxService.Post("/Account/Login", {
      email: login,
      password: password
    });
  }

  public CheckAuth(): Observable<boolean>{
    return this.lynxService.Get('/Account/CheckAuth');
  }

}
