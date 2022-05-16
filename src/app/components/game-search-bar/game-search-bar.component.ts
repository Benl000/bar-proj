import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-search-bar',
  templateUrl: './game-search-bar.component.html',
  styleUrls: ['./game-search-bar.component.scss']
})
export class GameSearchBarComponent implements OnInit {

  constructor() { }
  @Output('search') onSearch = new EventEmitter<{ category: string, gameName: string }>()
  games: string[] = ['Vodka', 'Rum', 'Margarita', 'Gin', 'Punch', 'Tonic']
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  ngOnInit(): void {
  }

  setGames(category: string, gameName: string) {
    this.onSearch.emit({ category, gameName })
  }

}
