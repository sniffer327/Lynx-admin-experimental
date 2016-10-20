import {Injectable} from '@angular/core';
import {Http, URLSearchParams, RequestOptionsArgs, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LynxConstants} from "../lynx-constants";

@Injectable()
export class LynxService {

  constructor(private http: Http) {
  }

  private ServiceGet(url: string, options?: RequestOptionsArgs): Observable<any> {
    let result = this.http.get(LynxConstants.apiUrl + url, options)
      .map(res => res.json())
      .catch(this.handleError);
    return result;
  }

  private ServicePost(url: string, data: any, options?: RequestOptionsArgs): Observable<any> {
    let body = JSON.stringify(data);
    let headers = new Headers({'Content-Type': 'application/json'});
    let opt = new RequestOptions({headers: headers});
    let result = this.http.post(LynxConstants.apiUrl + url, data, opt)
      .map(res => res.json())
      .catch(this.handleError);
    return result;
  }

  /**
   * Обмен данных методом Get
   * @param url
   * @param options
   * @returns {Observable<R>}
   * @constructor
   */
  public Get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.ServiceGet(url, options);
  }

  public Post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.ServicePost(url, body, options);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  //Превращает объект в цепочку параметров
  public URLParamsCreater<T>(model: T): URLSearchParams {
    let result = new URLSearchParams();
    for (var key in model) {
      // TODO: проверить на то, чтобы небыло вложенного объекта, только строка или число
      result.set(key, model[key]);
    }
    return result;
  }
}
