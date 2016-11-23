export class LynxConstants {
  /**
   * Режим Продакшна - true, отладки - false
   * @type {boolean}
   */
  private static Production: boolean = true;

  /**
   * Адрес сервера
   * @returns {string}
   */
  public static get serverUrl(): string {
    return this.Production ? "http://manage.lynx.pro/system" : "http://localhost/lynxCmsApi";
  }

  /**
   * Адрес до API-методов
   * @returns {string}
   */
  public static get apiUrl(): string {
    return this.serverUrl + "/api";
  }
}
