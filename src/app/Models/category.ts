/**
 * Created by sniffer on 23.11.16.
 */
import {ItemModel} from "./item";

export class CategoryModel {
  id: number;
  title: string;
  url: string;
  Visible: boolean;
  description: string;
  ParentId: number;
  meta_keywords: string;
  meta_description: string;
  Prioritet: number;
  items: ItemModel[];
  ChildrenCategories: CategoryModel[];
  ParentCategory: CategoryModel;
}
