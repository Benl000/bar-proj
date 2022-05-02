import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/service/cocktail.service.service';

@Component({
  selector: 'cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  constructor(
    private cocktailService: CocktailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  cocktail: Cocktail

  async ngOnInit() {
    console.log('this.route.snapshot.params.id:', this.route.snapshot.params['id'])
    // snapshot.params.id
    this.route.data.subscribe(data => {
      // console.log(data);
      console.log('data', data)
      this.cocktail = data['cocktail']
    })
  }

  getIngredient(idx){
    return this.cocktail[`strIngredient${idx}`]
  }
  getMeasure(idx){
    return this.cocktail[`strMeasure${idx}`]
  }

onBack() {
    this.router.navigateByUrl('')
  }
}
