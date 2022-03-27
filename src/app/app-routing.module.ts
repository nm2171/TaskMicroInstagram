import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateItemComponent } from './components/create-item/create-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'photos', component: HomeComponent},
  { path: 'create-item', component: CreateItemComponent },
  { path: 'photos/:id/edit', component: EditItemComponent },
  { path: 'photos/:id', component: DetailsComponent },
  { path: '', redirectTo: '/photos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
