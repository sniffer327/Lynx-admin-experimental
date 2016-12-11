import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class CanActivateService {

  private isActivate: string = 'isActivate';

  constructor(private authService: AuthService) { }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {

    return !!this.authService.CheckAuthCookies(this.isActivate);
  }
}
