import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Game } from '../models/game.model';
import { GameService } from './game.service.service';

@Injectable({
  providedIn: 'root'
})
export class GameResolverService implements Resolve<Promise<Game>> {

  constructor(private gameService: GameService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    const game = await this.gameService.getById(id).toPromise()
    return game
  }
}
