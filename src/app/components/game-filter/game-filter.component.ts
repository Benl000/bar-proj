import { Component, OnInit } from '@angular/core';
import { GameFilter } from 'src/app/models/game-filter.model';
import { GameService } from 'src/app/service/game.service.service';

@Component({
  selector: 'game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.scss']
})
export class GameFilterComponent implements OnInit {

  constructor(private gameService: GameService) { }
  filterBy: GameFilter

  ngOnInit(): void {
    this.gameService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }
  onChangeFilter() {
    this.gameService.setFilterBy(this.filterBy)
  }
}
