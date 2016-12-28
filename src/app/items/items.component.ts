import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item.model";
import {LynxService} from "../Services/lynx.service";
import {LynxLoggingService} from "../Services/lynx-logging.service";
import {IItemColumn} from "../custom-components/lynx-table/Models/item.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  // Список товаров
  public items: ItemModel[];

  // Столбцы таблицы
  public itemsColumns: IItemColumn[];

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

    // Параметры таблицы с товарами
    this.itemsColumns = [
      {
        header: 'ID',
        data: 'id'
      },
      {
        header: 'Название',
        data: 'title',
        template: {
          type: 'link',
          linkUrl: '/item-edit',
          param: 'id'
        }
      },
      {
        header: 'Категория',
        data: 'categoryId'
      },
      {
        header: 'Приоритет',
        data: 'Prioritet'
      },
      {
        header: 'Дата создания',
        data: 'DateCreating',
        pipe: 'date'
      },
      {
        header: 'Дата редактирования',
        data: 'DateEditing',
        pipe: 'date'
      }
    ];
  }

}
