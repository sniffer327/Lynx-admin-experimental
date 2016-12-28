import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lynx-table',
  templateUrl: './lynx-table.component.html',
  styleUrls: ['./lynx-table.component.scss']
})

export class LynxTableComponent implements OnInit {

  // Список элементов
  @Input() items: any;

  // Колонки таблицы
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
