import {CategoryModel} from "./category";
/**
 * Created by sniffer on 19.11.16.
 */

export class ItemModel {
  public id?: number;
  public title: string;
  public subTitle: string;
  public categoryId: number;
  public description: string;
  public body: string;
  public meta_keywords: string;
  public meta_description: string;
  public Prioritet: number;
  public DateCreating: Date;
  public DateEditing: Date;
  public ItemType: number;
  public ParentCategory: CategoryModel;
}
