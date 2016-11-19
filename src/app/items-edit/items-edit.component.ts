import {Component, OnInit} from '@angular/core';
import {ItemModel, IItem} from "../Models/item";

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})
export class ItemsEditComponent implements OnInit {

  public item: IItem;

  constructor() {
  }

  ngOnInit() {

    this.item = {
      id: 12,
      title: 'Лампа столовая',
      price: 1400,
      description: 'Отличная лампа белого цвета',
      categoryId: 2,
      imageUrl: '/lamp.jpg'
    };

  }

}
