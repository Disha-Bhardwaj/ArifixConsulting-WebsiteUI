import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public httpClient: HttpClient) {
  }

  protected httpPost(url: string, param?: any): Observable<any> {
    let serviceUrl = '';
    serviceUrl = environment.serviceUrl + url;
    return this.httpClient.post(serviceUrl, param).pipe(map((res: any) => res),
      catchError((error: any) => {
        return this.handleError(error);
      })
    )
  }

  protected httpGet(url: string): Observable<any> {
    return this.httpClient.get(environment.serviceUrl + url).pipe(map((res: any) => res), catchError((error: any) => this.handleError(error)));
  }

  private handleError(error: any) {
    const errorMessage = error.message ? error.message : 'Server Error'
    return throwError(errorMessage);
  }
}
