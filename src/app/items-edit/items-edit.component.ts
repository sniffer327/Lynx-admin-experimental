import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item.model";
import {LynxService} from "../Services/lynx.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CategoryModel} from "../Models/category.model";

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.scss']
})

export class ItemsEditComponent implements OnInit {

  private isEdit: boolean;
  public item: ItemModel;
  public id?: number;
  public backPage: string;

  public categories: CategoryModel[];

  constructor(private lynxService: LynxService,
              private router: Router,
              private route: ActivatedRoute) {

    this.route.url.subscribe(res => {
      let tmp = res[0].path;

      switch (tmp) {
        case "item-edit":
          this.backPage = "items";
          //this.item.ItemType = 1;
          break;
        case "page-edit":
          this.backPage = "pages";
          //this.item.ItemType = 3;
          break;
        case "news-edit":
          this.backPage = "news";
          //this.item.ItemType = 2;
          break;
        default:
          this.backPage = "items";
          break;
      }
    }, () => console.log());


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

          /*this.item.Images = [
            {
              url: 'Путь к изображению',
              title: 'Изображение',
              isMain: true
            }
          ];*/

          console.log('Данные о товаре: ', res);
        }
      )

  }

  public Save(): void {
    // TODO: Раскомментить, когда будет готов обработчик на сервере
    this.lynxService.Post('/Items/UpdateItem', this.item).subscribe(res => {
      this.router.navigate(['/' + this.backPage]);
    }, error => {
    });

    //console.log('Сохраняю: ', this.item);

  }

  public DeleteItem(): void {
    this.lynxService.Get('/Items/DeleteItem?itemId=' + this.id).subscribe(res => {
      this.router.navigate(['/' + this.backPage]);
    }, error => {
    });
  }

  /**
   * Получение списка товаров
   * @constructor
   */
  public GetCategories(): void {

    this.lynxService.Post('/Items/GetCategoriesAsync', {})
      .subscribe(
        res => {
          this.categories = res.Result;
        }
      );
  }

  ngOnInit() {

    if (this.isEdit) {
      this.GetItemInfo();
    } else {
      this.item = new ItemModel();

      switch (this.backPage){
        case 'items': this.item.ItemType = 1; break;
        case 'news': this.item.ItemType = 2; break;
        case 'pages': this.item.ItemType = 3; break;
        default: this.item.ItemType = 1; break;
      }
    }

    this.GetCategories();

  }

}
