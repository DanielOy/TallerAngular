import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { SearchComponent } from './modules/search/pages/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'search',
    loadChildren: ()=> import('./modules/search/search.module').then(m=>m.SearchModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
