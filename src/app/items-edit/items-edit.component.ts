import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item.model";
import {LynxService} from "../Services/lynx.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})

export class ItemsEditComponent implements OnInit {

  private isEdit: boolean;
  public item: ItemModel;
  public id?: number;

  constructor(private lynxService: LynxService,
              private route: ActivatedRoute) {

    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });

    (this.id) ? this.isEdit = true : this.isEdit = false;

  }

  public GetItemInfo(): void {

    this.lynxService.Get('/Items/GetItem?itemId=' + this.id)
      .subscribe(
        res => {
          this.item = res;

          this.item.Images = [
            {
              url: 'Путь к изображению',
              title: 'Изображение',
              isMain: true
            }
          ];

          console.log('Данные о товаре: ', res);
        }
      )

  }

  Save(): void {

    // TODO: Раскомментить, когда будет готов обработчик на сервере
    // this.lynxService.Post('/Items', this.item)
    //   .subscribe(
    //     res => {
    //       console.log('Данные успешно сохранены ');
    //     }
    //   )

    console.log('Сохраняю: ', this.item);

  }

  ngOnInit() {

    if (this.isEdit) {

      this.GetItemInfo();

    } else {

      this.item = new ItemModel();
    }
  }

}
