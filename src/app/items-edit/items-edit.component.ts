import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item";
import {LynxService} from "../Services/lynx.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})
export class ItemsEditComponent implements OnInit {

  public item: ItemModel;
  public id: number;

  constructor(private lynxService: LynxService,
              private route: ActivatedRoute) {

    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });

  }

  public GetItemInfo() {
    this.lynxService.Get('/Items/GetItem?itemId=' + this.id)
      .subscribe(
        res => {
          this.item = res;
          console.log('Данные о товаре: ', res);
        }
      )
  }

  ngOnInit() {

    this.GetItemInfo();

  }

}
