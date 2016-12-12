import {Injectable} from '@angular/core';
import {Http, URLSearchParams, RequestOptionsArgs, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {LynxConstants} from "../lynx-constants";
import {LynxLoggingService} from "./lynx-logging.service";
import {AuthService} from './auth.service';
import {Router} from "@angular/router";

@Injectable()
export class LynxService {

  constructor(private http: Http,
              private authService: AuthService,
              private router: Router) {

    // CORS
    let _build = (<any> http)._backend._browserXHR.build;
    (<any> http)._backend._browserXHR.build = () => {
      let _xhr = _build();
      _xhr.withCredentials = true;
      return _xhr;
    };
  }

  /**
   * Main GET handler
   * @param url
   * @param options
   * @returns {Observable<R>}
   * @constructor
   */
  private ServiceGet(url: string, options?: RequestOptionsArgs): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    let opt = new RequestOptions({headers: headers});

    let result = this.http.get(LynxConstants.apiUrl + url, opt)
      .map(
        res => res.json()
      )
      .catch(this.handleError);

    return result;
  }

  public Get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.ServiceGet(url, options);
  }

  /**
   * Main POST handler
   * @param url
   * @param data
   * @param options
   * @returns {Observable<R>}
   * @constructor
   */
  private ServicePost(url: string, data: any, options?: RequestOptionsArgs): Observable<any> {
    let body = JSON.stringify(data);
    let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    let opt = new RequestOptions({headers: headers});
    let result = this.http.post(LynxConstants.apiUrl + url, data, opt)
      .map(
        res => res.json()
      )
      .catch(this.handleError);

    return result;
  }

  public Post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.ServicePost(url, body, options);
  }

  /**
   * Основной обработчик ошибок для запросов
   * @param error
   * @returns {any}
   */
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';

    if (error.status === 401) {
      this.authService.DestroyAuthCookies();

      this.router.navigate(['/auth']);
    }

    LynxLoggingService.Error('Ошибка запроса ', errMsg);

    return Observable.throw(errMsg);
  }
}
