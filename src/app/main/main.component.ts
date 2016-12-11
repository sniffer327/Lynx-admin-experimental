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

  constructor() {}

  ngOnInit() {

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
}
