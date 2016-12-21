import { Component, OnInit, Input } from '@angular/core';
import {IItemColumn} from "../Models/item.model";

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

  constructor() { }

  ngOnInit() {
  }

}
