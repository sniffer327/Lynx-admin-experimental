import { Component, OnInit } from '@angular/core';
import { IItem } from "../Models/item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items: IItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        id: 12,
        title: 'Лампа столовая',
        price: 1400,
        description: 'Отличная лампа белого цвета',
        categoryId: 2,
        imageUrl: '/lamp.jpg'
      },
      {
        id: 14,
        title: 'Кочерга',
        price: 1200,
        description: 'Подгодит для проникновения в задний проход',
        categoryId: 1,
        imageUrl: '/rumble.jpg'
      }
    ];

  }

}
