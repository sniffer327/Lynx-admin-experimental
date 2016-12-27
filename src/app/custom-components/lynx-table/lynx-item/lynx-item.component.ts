import { Component, OnInit, Input } from '@angular/core';
import {IItemColumn} from "../Models/item.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'lynx-item',
  templateUrl: './lynx-item.component.html',
  styleUrls: ['./lynx-item.component.scss']
})
export class LynxItemComponent implements OnInit {

  // Содержимое элемента таблицы
  @Input() item: any;

  // Содержимое столбца в элементе
  @Input() column: IItemColumn;

  constructor(private datePipe: DatePipe) { }

  // Получем данные для ячейки
  GetData(): any {

    // Получем pipe
    let columnPipe = this.column.pipe;

    // Получаем данные для столбца
    let columnData = this.column.data;

    // Получаем значение ячейки
    let data = this.item[columnData];

    // Если Pipe существует
    if (columnPipe) {
      return this.DataPipeTransform(data, columnPipe);
    }

    return data;
  }

  // Трансформируем данные через pipe
  public DataPipeTransform(column: any, pipe: string): any {

    if (pipe === 'date') {
      return this.datePipe.transform(column, 'dd-MM-yy');
    }
  }

  ngOnInit() {
  }

}
