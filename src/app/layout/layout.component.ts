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

  // Информация о пользователе
  public loginInfo: LoginInfoModel;

  // Список сайтов
  public sitesList: any[];

  // Имя текущего сайта
  public currentSiteName: string;

  // Полощение sidebar
  public sidebarState: boolean = true;

  constructor(public authService: AuthService,
              private router: Router,
              private lynxService: LynxService) {
  }

  /**
   * Выход из приложения
   * @constructor
   */
  public logOut(): void {
    this.authService.Logout();
  }

  /**
   * Получаем список сайтов, принадлежащих пользователю
   * Делаем активным выбранный сайт
   * @constructor
   */
  private getSites(): void {
    this.lynxService.Get("/Main/GetSitesForUser").subscribe(res => {
      this.sitesList = res;

      let siteId = AuthService.LoginInfo.CurrentSiteId;

      let currentSiteId = this.sitesList.find((item) => item.id === siteId);

      this.currentSiteName = currentSiteId.siteName;
    }, error => console.log(error));
  }

  /**
   * Назначаем отображаемй сайт
   * @param siteId id сайта
   * @param siteName Наименование сайта
   * @constructor
   */
  public changeSite(siteId: number, siteName: string): void {
    this.loginInfo.CurrentSiteId = siteId;

    this.currentSiteName = siteName;

    this.lynxService.Get("/Main/SetWorkingSite?siteId=" + siteId).subscribe(() => {
      this.router.navigate(['/']);
    }, error => console.log(error));
  }

  /**
   * Текущее состояние боковой панели
   * @returns {string|string}
   * @constructor
   */
  public sideNav(): string {
    return (this.sidebarState) ? 'sidenav-opened' : '';
  }

  /**
   * Переключатель боковой панели
   * @constructor
   */
  public toggleSideNav(): void {
    this.sidebarState = !this.sidebarState;
  }

  ngOnInit() {
    this.loginInfo = AuthService.LoginInfo;

    this.getSites();
  }
}
