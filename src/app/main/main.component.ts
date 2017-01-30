import {Component, OnInit} from '@angular/core';

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
        img: '/assets/images/items.jpg',
        description: 'В данном модуле Вы можете отредактировать товары'
      },
      {
        title: 'Страницы',
        url: '/pages',
        img: '/assets/images/pages.jpg',
        description: 'В данном модуле Вы можете отредактировать страницы'
      },
      {
        title: 'Новости',
        url: '/news',
        img: '/assets/images/news.jpg',
        description: 'В данном модуле Вы можете отредактировать новости'
      }
    ];

  }
}
