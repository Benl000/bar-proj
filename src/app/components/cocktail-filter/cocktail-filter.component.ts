import { Component, OnInit } from '@angular/core';
import { CocktailFilter } from 'src/app/models/cocktail-filter.model';
import { CocktailService } from 'src/app/service/cocktail.service.service';

@Component({
  selector: 'cocktail-filter',
  templateUrl: './cocktail-filter.component.html',
  styleUrls: ['./cocktail-filter.component.scss']
})
export class CocktailFilterComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }
  filterBy: CocktailFilter

  ngOnInit(): void {
    this.cocktailService.filterBy$.subscribe(filterBy => {
      this.filterBy = filterBy
    })
  }
  onChangeFilter() {
    this.cocktailService.setFilterBy(this.filterBy)
  }
}
