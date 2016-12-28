/**
 * Created by sniffer on 21.12.16.
 */

// Интерфейс для колонки таблицы
export interface IItemColumn {
  header: string,
  data: string,
  pipe?: string,
  template?: IItemTemplate
}

// Интерфейс для шаблона элемента таблицы
export interface IItemTemplate {
  type: string,
  linkUrl?: string,
  param?: string
}
