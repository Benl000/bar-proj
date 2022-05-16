import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/service/game.service.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(private gameService: GameService) { }
  subscription: Subscription
  games: Game[]
  games$: Observable<Game[]>
  filter: string = 's'


  ngOnInit(): void {
    const search = this.gameService.currSearch
    search ? this.getGames({ category: 's', gameName: search }) : this.getGames({ category: 's', gameName: '' })
  }

  ngOnDestroy(): void {
    // this.subscription?.unsubscribe()
  }

  async getGames({ category, gameName }) {
    console.log(gameName);
    if (category === 'name') { this.filter = 's' }
    else if (category === 'firstLetter') { this.filter = 'f' }
    await this.gameService.getGame(this.filter, gameName)
    this.gameService.query()
    this.games$ = this.gameService.games$
  }
}
