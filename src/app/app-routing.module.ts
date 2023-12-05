import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeareComponent } from './weare/weare.component';
import { AjudaComponent } from './ajuda/ajuda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'weare', component: WeareComponent },
  { path: 'help', component: AjudaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
