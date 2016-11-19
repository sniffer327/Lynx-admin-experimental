/**
 * Created by sniffer on 19.11.16.
 */

export class ItemModel {

  constructor(public title: string, public price: number, public description?: string, public categoryId?: number,
              public imageUrl?: string) {

    this.title = title || 'Без названия';
    this.price = price || 0;
    this.description = description;
    this.categoryId = categoryId;
    this.imageUrl = imageUrl;

  }

}
