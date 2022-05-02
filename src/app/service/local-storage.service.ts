import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  constructor() { }

  public saveToStorage(key: string, val: any) {
    var str = JSON.stringify(val)
    localStorage.setItem(key, str)
  }

  public loadFromStorage(key: string) {
    var str = localStorage.getItem(key)
    var val = JSON.parse(str)
    return val
  }
}
