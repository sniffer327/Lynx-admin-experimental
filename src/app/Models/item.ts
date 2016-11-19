/**
 * Created by sniffer on 19.11.16.
 */

export interface IItem {
  id: number;
  title: string;
  price: number;
  description?: string;
  categoryId?: number;
  imageUrl?: string;
}

export class ItemModel implements IItem {

  constructor(public id: number, public title: string, public price: number, public description?: string,
              public categoryId?: number, public imageUrl?: string) {

    this.id = id;
    this.title = title || 'Без названия';
    this.price = price || 0;
    this.description = description;
    this.categoryId = categoryId;
    this.imageUrl = imageUrl;

  }

}
