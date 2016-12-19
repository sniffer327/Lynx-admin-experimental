import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item.model";
import {LynxService} from "../Services/lynx.service";
import {LynxLoggingService} from "../Services/lynx-logging.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  // Список товаров
  public items: ItemModel[];

  // Заголовки к таблице
  public itemsHeader: string[];

  // Столбцы таблицы
  public itemsColumns: string[];

  constructor(private lynxService: LynxService) {
  }

  /**
   * Получение списка товаров
   * @constructor
   */
  public GetItems(): void {

    this.lynxService.Post('/Items/GetItems?itemType=1', {})
      .subscribe(
        res => {

          this.items = res.Result;

          LynxLoggingService.Log('Список товаров ', res.Result);
        }
      );
  }

  ngOnInit() {

    this.GetItems();

    // Заголовок таблицы
    this.itemsHeader = [
      'ID',
      'Название',
      'Категория',
      'Приоритет',
      'Дата создания',
      'Дата редактирования'
    ];

    // <td>{{ item.id }}</td>
    // <td class="text-xs-left">
    // <a [routerLink]="['/item-edit', item.id]">
    //   {{ item.title }}
    // </a>
    // </td>
    // <td>{{ item.categoryId }}</td>
    // <td>{{ item.Prioritet }}</td>
    // <td>{{ item.DateCreating | date: "dd.MM.yy" }}</td>
    // <td>{{ item.DateEditing | date: "dd.MM.yy" }}</td>
    // Столбцы таблицы
    this.itemsColumns = [
      'id',
      'title',
      'categoryId',
      'Prioritet',
      'DateCreating',
      'DateEditing'
    ];
  }

}
