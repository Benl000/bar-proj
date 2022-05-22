import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/service/game.service.service';

@Component({
  selector: 'game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  game: Game

  async ngOnInit() {
    // console.log('this.route.snapshot.params.id:', this.route.snapshot.params['id'])

    this.route.params.subscribe(async data => {
      // console.log(+data['id']);
      if (true) {
        this.gameService.getById(+data['id']).subscribe(currGame => this.game = currGame);
        // this.game = this.gameService.games$

      } else {
        const currId = +data['id']
        let ApiById = '?id=' + currId
        await this.gameService.getGame(ApiById, 'game' + currId);
        this.gameService.query()
        console.log(this.gameService.games$);
      }

    })
  }

  getIngredient(idx) {
    return this.game[`strIngredient${idx}`]
  }
  getMeasure(idx) {
    return this.game[`strMeasure${idx}`]
  }

  onBack() {
    this.router.navigateByUrl('')
  }
}
