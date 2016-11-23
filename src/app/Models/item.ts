import {CategoryModel} from "./category";
/**
 * Created by sniffer on 19.11.16.
 */

export interface IItem {
  id: number;
  title: string;
  subTitle: string;
  categoryId: number;
  description: string;
  body: string;
  meta_keywords: string;
  meta_description: string;
  Prioritet: number;
  DateCreating: Date;
  DateEditing: Date;
  ItemType: number;
  ParentCategory: CategoryModel;
}

export class ItemModel implements IItem {
  id: number;
  title: string;
  subTitle: string;
  categoryId: number;
  description: string;
  body: string;
  meta_keywords: string;
  meta_description: string;
  Prioritet: number;
  DateCreating: Date;
  DateEditing: Date;
  ItemType: number;
  ParentCategory: CategoryModel;
}
