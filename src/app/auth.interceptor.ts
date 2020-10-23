import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headersObject;
    const loginUrl = req.url.indexOf("login") !== -1;
    if (!loginUrl) {
      headersObject = {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.getToken()}`,
      };
    } else { 
      headersObject = {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json'
      };
    }
    req = req.clone({
      setHeaders: headersObject
    });
    return next.handle(req);
  }

  getToken() {
    return JSON.parse(sessionStorage.getItem('user'))?.access_token;
  }
}