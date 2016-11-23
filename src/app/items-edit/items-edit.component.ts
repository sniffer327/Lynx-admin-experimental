import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item";

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})
export class ItemsEditComponent implements OnInit {

  public item: ItemModel;

  constructor() {
  }

  ngOnInit() {}

}
