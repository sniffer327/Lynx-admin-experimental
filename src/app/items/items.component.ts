import { Component, OnInit } from '@angular/core';
import { ItemModel } from "../Models/item.model";
import { LynxService } from "../Services/lynx.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

  public items: ItemModel[];

  constructor(private lynxService: LynxService) { }

  public GetItems(): void {
    this.lynxService.Post('/Items/GetItems?itemType=1', {}).subscribe(
      res => {
        this.items = res.Result;
        console.log(res.Result);
      }
    );
  }

  ngOnInit() {
    this.GetItems();
  }

}
