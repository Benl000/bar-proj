import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/service/cocktail.service.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(private cocktailService: CocktailService) { }
  subscription: Subscription
  cocktails: Cocktail[]
  cocktails$: Observable<Cocktail[]>
  filter:string='s'


ngOnInit(): void {
  const search= this.cocktailService.currSearch
  search? this.getCocktails({category:'s',cocktailName:search}):this.getCocktails({category:'s',cocktailName:''})
}

ngOnDestroy(): void {
  // this.subscription?.unsubscribe()
}

async getCocktails({category,cocktailName}) {
  console.log(cocktailName);
  if (category==='name'){ this.filter='s'}
  else if (category==='firstLetter'){ this.filter='f'}
  await this.cocktailService.getCocktail(this.filter,cocktailName)
  this.cocktailService.query()
  this.cocktails$ = this.cocktailService.cocktails$
  }
}
