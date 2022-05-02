import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailEditComponent } from './pages/cocktail-edit/cocktail-edit.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { CocktailFilterComponent } from './components/cocktail-filter/cocktail-filter.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailPreviewComponent } from './components/cocktail-preview/cocktail-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CocktailSearchBarComponent } from './components/cocktail-search-bar/cocktail-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CocktailDetailsComponent,
    CocktailEditComponent,
    AppHeaderComponent,
    AppFooterComponent,
    CocktailFilterComponent,
    CocktailListComponent,
    CocktailPreviewComponent,
    CocktailSearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
