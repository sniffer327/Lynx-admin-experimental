import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {LynxConstants} from "../lynx-constants";

@Injectable()
export class CanActivateService {

  constructor(private authService: AuthService) {
  }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    return this.authService.CheckAuthCookies(LynxConstants.SessionCookieKey);
  }
}
