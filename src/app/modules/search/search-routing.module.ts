import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { DetailComponent } from "./pages/detail/detail.component";

const routes: Routes = [
    {
        path: '',
        component: SearchPageComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule {

}