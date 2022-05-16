import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
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
    console.log('this.route.snapshot.params.id:', this.route.snapshot.params['id'])
    // snapshot.params.id
    // console.log(this.route);

    this.route.params.subscribe(data => {
      // console.log(data);
      // console.log('data', data['id'])
      // console.log(typeof (data['id']));

      const gameId = +data['id']
      // this.game = this.gameService.getById(gameId)
    })
    // console.log(x);

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
