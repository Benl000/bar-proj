import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Game } from '../models/game.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GameFilter } from '../models/game-filter.model';
import { LocalStorage } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient, public storageService: LocalStorage) { }

  private _gamesDB: Game[] = []
  public currSearch: string

  private _games$ = new BehaviorSubject<Game[]>([]);
  public games$ = this._games$.asObservable()

  private _filterBy$ = new BehaviorSubject<GameFilter>({ term: '' });
  public filterBy$ = this._filterBy$.asObservable()

  public query() {
    const filterBy = this._filterBy$.getValue()
    const games = this._gamesDB.filter(({ title }) => {
      return title?.toLowerCase().includes(filterBy.term.toLowerCase())
    });
    this._games$.next(games)
  }

  public getById(gameId: Number): Observable<Game> {
    this._gamesDB = this.storageService.loadFromStorage('All')
    const game = this._gamesDB.find(game => game['id'] === gameId)
    return of({ ...game } as Game)
  }

  public setFilterBy(filterBy: GameFilter) {
    this._filterBy$.next({ ...filterBy })
    this.query()
  }

  public getGame(currApi, gameSearch) {
    const games = this.storageService.loadFromStorage(gameSearch)
    if (!games || !games.length) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          'X-RapidAPI-Key': 'ae1cd3cce6msh869f87ef597f627p1dc760jsn601bbf63d4bf'
        }
      };

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game${currApi}`, options)
        .then(response => response.json())
        .then(response => {

          this._gamesDB = response
          console.log(this._gamesDB);
          this.storageService.saveToStorage(gameSearch, this._gamesDB)
          this._games$.next(this._gamesDB)
        })
        .catch(err => console.error(err));
    } else {
      this._gamesDB = games
    }

  }
  // public getGame(filter, gameSearch) {
  //   this.currSearch = (gameSearch) ? gameSearch : this.currSearch
  //   const games = this.storageService.loadFromStorage(gameSearch)
  //   if (!games || !games.length) {
  //     this.http.get<any>(`https://www.freetogame.com/api/games`)
  //       .subscribe(data => {
  //         this._gamesDB = data.games
  //         this.storageService.saveToStorage(gameSearch, this._gamesDB)
  //         this._games$.next(this._gamesDB)
  //       })
  //   } else {
  //     this._gamesDB = games
  //   }
}

