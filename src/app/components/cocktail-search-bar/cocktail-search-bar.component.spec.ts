import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailSearchBarComponent } from './cocktail-search-bar.component';

describe('CocktailSearchBarComponent', () => {
  let component: CocktailSearchBarComponent;
  let fixture: ComponentFixture<CocktailSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
