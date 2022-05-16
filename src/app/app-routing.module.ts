import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailsComponent } from './pages/game-details/game-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GameResolverService } from './service/game-resolver.service';

const routes: Routes = [
  {
    path: 'game/:id',
    component: GameDetailsComponent,
    resolve: { game: GameResolverService }
  },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
