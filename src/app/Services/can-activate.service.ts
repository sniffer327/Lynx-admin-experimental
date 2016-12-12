import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {LynxConstants} from "../lynx-constants";
import {LynxCookiesService} from "./lynx-cookies.service";

@Injectable()
export class CanActivateService {

  constructor(private cookies: LynxCookiesService) {
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    return this.cookies.CheckAuthCookies(LynxConstants.SessionCookieKey);
  }
}
