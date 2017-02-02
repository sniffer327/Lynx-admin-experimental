import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LynxConstants} from "../lynx-constants";
import {LynxLoginService} from "./lynx-login.service";

@Injectable()
export class CanActivateService {

  constructor(private logInService: LynxLoginService) {
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    return this.logInService.CheckAuthData(LynxConstants.SessionCookieKey);
  }
}
