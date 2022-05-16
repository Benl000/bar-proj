import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSearchBarComponent } from './game-search-bar.component';

describe('GameSearchBarComponent', () => {
  let component: GameSearchBarComponent;
  let fixture: ComponentFixture<GameSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameSearchBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
