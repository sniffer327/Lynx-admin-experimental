export class LynxConstants {

  /**
   * Режим Продакшна - true, отладки - false
   * @type {boolean}
   */
  public static Production: boolean = true;

  /**
   * Адрес сервера
   * @returns {string}
   */
  public static get serverUrl(): string {
    return this.Production ? "http://manageApi.lynx.pro" : "http://localhost/lynxCmsApi";
  }

  /**
   * Адрес до API-методов
   * @returns {string}
   */
  public static get apiUrl(): string {
    return this.serverUrl + "/api";
  }
}
