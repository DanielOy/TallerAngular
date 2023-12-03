import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    SearchPageComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
  ]
})
export class SearchModule { }
