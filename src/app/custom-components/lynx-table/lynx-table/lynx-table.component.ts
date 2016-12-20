import { Component, OnInit, Input } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'lynx-table',
  templateUrl: './lynx-table.component.html',
  styleUrls: ['./lynx-table.component.scss']
})
export class LynxTableComponent implements OnInit {

  // Список элементов
  @Input() items: any;

  // Заголовок таблицы
  @Input() header: string[];

  // Колонки таблицы
  @Input() columns: string[];

  constructor(private datePipe: DatePipe) { }

  public RenderItem(date): string {
    return this.datePipe.transform(date, 'dd.MM.yyyy');
  }

  ngOnInit() {
  }

}
