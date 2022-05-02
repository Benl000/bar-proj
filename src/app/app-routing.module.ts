import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CocktailResolverService } from './service/cocktail-resolver.service';

const routes: Routes = [
  {
    path: 'cocktail/:id',
    component: CocktailDetailsComponent,
    resolve: { cocktail: CocktailResolverService }
  },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
