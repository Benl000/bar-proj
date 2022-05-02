import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';

@Component({
  selector: 'cocktail-preview',
  templateUrl: './cocktail-preview.component.html',
  styleUrls: ['./cocktail-preview.component.scss']
})
export class CocktailPreviewComponent implements OnInit {

  constructor() { }
  @Input() cocktail: Cocktail

  ngOnInit(): void {
  }

}
