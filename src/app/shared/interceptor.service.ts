import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor( public router: Router) { }
  // intercept(req, next) {

  token = localStorage.getItem('token');
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
      }
    });
      return next.handle(tokenizedReq).pipe(tap(event => {
        if (event instanceof HttpResponse) {
          
        }
      }, err => {
     
      if (err instanceof HttpErrorResponse && err.status === 401) {
        if (err.error.error) {
          
          //this.toastr.error(err.error.error);
        }
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }));
  }
}
