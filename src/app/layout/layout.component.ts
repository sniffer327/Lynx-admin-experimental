import {Component, OnInit} from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {LynxService} from "../Services/lynx.service";
import {LoginInfoModel} from "../Models/login-info.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public sitesList: any[];
  public loginInfo: LoginInfoModel;

  constructor(public authService: AuthService,
              private router: Router,
              private lynxService: LynxService) {
  }

  ngOnInit() {
    this.GetSites();
    this.loginInfo = AuthService.LoginInfo;
  }

  public LogOut(): void {
    this.authService.Logout();
  }

  /**
   * Получаем список сайтов, принадлежащих пользователю
   * @constructor
   */
  private GetSites(): void {
    this.lynxService.Get("/Main/GetSitesForUser").subscribe(res => {
      this.sitesList = res;
    }, error => console.log(error));
  }

  /**
   * Назначаем отображаемй сайт
   * @param siteId
   * @constructor
   */
  public ChangeSite(siteId: number): void{
    this.lynxService.Get("/Main/SetWorkingSite?siteId=" + siteId).subscribe(res => {
      this.router.navigate(['/']);
    }, error => console.log(error));
  }

}
