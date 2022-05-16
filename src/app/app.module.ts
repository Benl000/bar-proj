import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { GameEditComponent } from './pages/game-edit/game-edit.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { GameFilterComponent } from './components/game-filter/game-filter.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamePreviewComponent } from './components/game-preview/game-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GameSearchBarComponent } from './components/game-search-bar/game-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GameDetailsComponent,
    GameEditComponent,
    AppHeaderComponent,
    AppFooterComponent,
    GameFilterComponent,
    GameListComponent,
    GamePreviewComponent,
    GameSearchBarComponent,
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
