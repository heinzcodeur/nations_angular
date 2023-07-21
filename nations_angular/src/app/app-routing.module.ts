import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailNationComponent } from './detail-nation/detail-nation.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent,  pathMatch: 'full' },
  { path: '', component: AccueilComponent,  pathMatch: 'full'},
  { path: 'nation/:name', component: DetailNationComponent}
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
