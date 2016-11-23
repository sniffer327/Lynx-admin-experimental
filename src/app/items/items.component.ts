import { Component, OnInit } from '@angular/core';
import { ItemModel } from "../Models/item";
import { LynxService } from "../Services/lynx.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  public items: ItemModel[];

  constructor(private lynxService: LynxService) { }

  public GetItems() {
    this.lynxService.Post('/Items/GetItems', {}).subscribe(
      res => console.log(res)
    );
  }

  ngOnInit() {
    this.GetItems();
  }

}
