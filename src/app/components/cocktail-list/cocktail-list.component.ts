import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';

@Component({
  selector: 'cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  constructor() { }
  @Input() cocktails: Cocktail[]


  ngOnInit(): void {
  }

}
