import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  urls = {
    login: 'login',
    register: 'register'
  }

  login(email: string, password: string): Observable<any> {
    return this.httpPost(this.urls.login, {email, password});
  }

  register(obj: any): Observable<any> {
    return this.httpPost(this.urls.register, obj);
  }
}
