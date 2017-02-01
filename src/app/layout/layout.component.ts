import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  /**
   * Текущее состояние боковой панели
   * @returns {string|string}
   * @constructor
   */
  public sideNav(): string {
    let sideBarStatus = this.localStorageService.get('sidebar');

    return (sideBarStatus === 'closed') ? '' : 'sidenav-opened';
  }

  /**
   * Переключатель боковой панели
   * @constructor
   */
  public toggleSideNav(): void {
    let sideBarStatus = this.localStorageService.get('sidebar');

    if (!sideBarStatus) {
      this.localStorageService.set('sidebar', 'closed');

      return;
    }

    this.localStorageService.remove('sidebar');
  }

  public logOut() {

  }

  ngOnInit() {
  }

}
