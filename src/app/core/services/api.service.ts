import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http
      .get<T>(`${environment.api_url}${path}`, { params })
      .pipe(catchError(ApiService.formatErrors));
  }

  put<T,D>(path: string, data: D): Observable<T> {
    return this.http
      .put<T>(`${environment.api_url}${path}`, JSON.stringify(data))
      .pipe(catchError(ApiService.formatErrors));
  }

  post<T,D>(path: string, data: D): Observable<T> {
    return this.http
      .post<T>(`${environment.api_url}${path}`, JSON.stringify(data))
      .pipe(catchError(ApiService.formatErrors));
  }

  delete<T>(path: string): Observable<T> {
    return this.http
      .delete<T>(`${environment.api_url}${path}`)
      .pipe(catchError(ApiService.formatErrors));
  }
}
