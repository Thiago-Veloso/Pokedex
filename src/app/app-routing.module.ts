import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'add',
    component: AddPokemonComponent,
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
