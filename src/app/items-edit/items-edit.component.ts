import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../Models/item.model";
import {LynxService} from "../Services/lynx.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CategoryModel} from "../Models/category.model";
import {LynxLoggingService} from "../Services/lynx-logging.service";

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
    
    // Получение url параметра
    this.route.url.subscribe(res => {
      let tmp = res[0].path;

      // Определяем что редактировать
      switch (tmp) {
        case "item-edit":
          this.backPage = "items";
          break;
        case "page-edit":
          this.backPage = "pages";
          break;
        case "news-edit":
          this.backPage = "news";
          break;
        default:
          this.backPage = "items";
          break;
      }
    });

    // Получаем id редактируемого item
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];
    });

    // Определяем - редактирование ли это
    (this.id) ? this.isEdit = true : this.isEdit = false;
  }

  // Получаем данные item
  public GetItemInfo(): void {

    this.lynxService.Get('/Items/GetItem?itemId=' + this.id)
      .subscribe(
        res => {
          this.item = res;

          LynxLoggingService.Log('Данные о товаре: ', res);
        }
      )
  }

  // Обновление item
  public Save(): void {
    this.lynxService.Post('/Items/UpdateItem', this.item).subscribe(
      res => {
        this.router.navigate(['/' + this.backPage]);
      },
      error => LynxLoggingService.Error('Ошибка при обновлении', error)
    );

    LynxLoggingService.Log('Сохраняю: ', this.item);
  }

  // Удаление item
  public DeleteItem(): void {
    this.lynxService.Get('/Items/DeleteItem?itemId=' + this.id).subscribe(
      res => {
        this.router.navigate(['/' + this.backPage]);
      },
      error => LynxLoggingService.Error('Ошибка при удалении', error)
    );
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

    // switch (this.backPage){
    //   case 'items': this.item.ItemType = 1; break;
    //   case 'news': this.item.ItemType = 2; break;
    //   case 'pages': this.item.ItemType = 3; break;
    //   default: this.item.ItemType = 1; break;
    // }

    this.GetCategories();

    // Проверка - редактируем ли товар
    (this.isEdit)
      ? this.GetItemInfo()
      : this.item = new ItemModel();
  }
}
