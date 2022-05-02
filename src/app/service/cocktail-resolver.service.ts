import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from './cocktail.service.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailResolverService implements Resolve<Promise<Cocktail>> {

  constructor(private cocktailService: CocktailService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    const cocktail = await this.cocktailService.getById(id).toPromise()
    return cocktail
  }
}
