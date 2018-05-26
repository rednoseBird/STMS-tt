import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';

@Injectable()
export class LocalStorageService {
  constructor(
    protected localStorage: LocalStorage
  ) { }
  setData(key, data): Observable<any> {
    return this.localStorage.setItem(key, data);
  }
  getData(key): Observable<any> {
    return this.localStorage.getItem(key);
  }
  deleteData() {
  }
  clear() {
  }
}
