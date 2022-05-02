import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailFilterComponent } from './cocktail-filter.component';

describe('CocktailFilterComponent', () => {
  let component: CocktailFilterComponent;
  let fixture: ComponentFixture<CocktailFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
