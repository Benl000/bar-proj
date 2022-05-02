import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cocktail-search-bar',
  templateUrl: './cocktail-search-bar.component.html',
  styleUrls: ['./cocktail-search-bar.component.scss']
})
export class CocktailSearchBarComponent implements OnInit {

  constructor() { }
  @Output('search') onSearch = new EventEmitter<{category:string,cocktailName:string}>()
  drinks:string[]=['Vodka','Rum','Margarita','Gin','Punch','Tonic']
  letters:string[]=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  ngOnInit(): void {
  }
  
  setCocktails(category:string , cocktailName: string) {
    this.onSearch.emit({category,cocktailName})
  }

}
