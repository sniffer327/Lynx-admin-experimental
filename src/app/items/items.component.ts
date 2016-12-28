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
      {
        header: 'ID',
        data: 'id'
      },
      {
        header: 'Название',
        data: 'title',
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
