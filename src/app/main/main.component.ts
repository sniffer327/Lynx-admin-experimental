import {Component, OnInit} from '@angular/core';
import {UserInfoModel} from "../Models/user-info.model";
import {AuthService} from "../Services/auth.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent implements OnInit {

  public modules;

  public accountData: UserInfoModel;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.AuthChecked();

    this.modules = [
      {
        title: 'Товары',
        url: '/items',
        img: '/assets/images/developing.jpg',
        subtitle: 'Модуль с товарами',
        description: 'В данном модуле Вы можете отредактировать товары'
      },
      {
        title: 'Новости',
        url: '/news',
        img: '/assets/images/news.jpg',
        subtitle: 'Модуль с новостями',
        description: 'В данном модуле Вы можете отредактировать новости'
      }
    ];

  }

  /**
   * Проверка авторизации
   * @constructor
   */
  private AuthChecked() {
    if (this.authService.accountData != null && (this.authService.accountData.email == null || this.authService.accountData.email == '')) {
      this.accountData = new UserInfoModel();
      this.authService.UserInfoObserveble().subscribe(res => {
          this.accountData = res;
          //this.datePickerObject.startDateStart = this.accountData.dateActivation;
        },
        error => console.log(error));
    } else {
      this.accountData = this.authService.accountData;
    }
  }
}
