import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactosViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;

  constructor() {}
}
export type ModoCRUD = 'list' | 'add' | 'edit' | 'view' | 'delete';

export abstract class RESTDAOService<T, K> {
  protected baseUrl = environment.apiURL;
  constructor(
    protected http: HttpClient,
    entidad: string,
    protected option = {}
  ) {
    this.baseUrl += entidad;
  }
  query(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.baseUrl, this.option);
  }
  get(id: K): Observable<T> {
    return this.http.get<T>(this.baseUrl + '/' + id, this.option);
  }
  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item, this.option);
  }
  change(id: K, item: T): Observable<T> {
    return this.http.put<T>(this.baseUrl + '/' + id, item, this.option);
  }
  remove(id: K): Observable<T> {
    return this.http.delete<T>(this.baseUrl + '/' + id, this.option);
  }
}

@Injectable({
  providedIn: 'root'
 })
 export class ContactosDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
  super(http, 'contactos', {
  context: new HttpContext().set(AUTH_REQUIRED, true)
  });
  }
 }