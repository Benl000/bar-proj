import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { CocktailFilter } from '../models/cocktail-filter.model';
import { LocalStorage } from './local-storage.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient, public storageService: LocalStorage) { }

  private _cocktailsDB: Cocktail[]=[]
  public currSearch: string

  private _cocktails$ = new BehaviorSubject<Cocktail[]>([]);
  public cocktails$ = this._cocktails$.asObservable()

  private _filterBy$ = new BehaviorSubject<CocktailFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable()

  public query() {
    const filterBy = this._filterBy$.getValue()    
    const cocktails = this._cocktailsDB.filter(({ strDrink }) => {
      return strDrink?.toLowerCase().includes(filterBy.term.toLowerCase())
    });
    this._cocktails$.next(cocktails)
  }

  public getById(cocktailId: string): Observable<Cocktail> {
    const cocktail = this._cocktailsDB.find(cocktail => cocktail.idDrink === cocktailId)
    return of({ ...cocktail } as Cocktail)
  }

  public setFilterBy(filterBy: CocktailFilter) {
    this._filterBy$.next({ ...filterBy })
    this.query()
  }

  public getCocktail(filter,cocktailSearch) {
      this.currSearch=(cocktailSearch)?cocktailSearch:this.currSearch
      const cocktails = this.storageService.loadFromStorage(cocktailSearch)
      if (!cocktails||!cocktails.length) {
         this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${filter}=${cocktailSearch}`)
       .subscribe(data=>{
         this._cocktailsDB = data.drinks
         this.storageService.saveToStorage(cocktailSearch, this._cocktailsDB)
         this._cocktails$.next(this._cocktailsDB)
       })
      }else{
        this._cocktailsDB =cocktails
      }
  }
}