import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TmListComponent } from './tm-list/tm-list.component';
import { TmAddFormComponent } from './tm-add-form/tm-add-form.component';
import { ViewTroublemakerComponent } from './view-troublemaker/view-troublemaker.component';
import { EditTroublemakerComponent } from './edit-troublemaker/edit-troublemaker.component';

const appRoutes:Routes = [
  { path: 'troublemakers', component: TmListComponent },
  { path: 'troublemakers/add', component: TmAddFormComponent },
  { path: 'troublemakers/:id', component:  ViewTroublemakerComponent},
  { path: 'troublemakers/edit/:id', component:  EditTroublemakerComponent},
  { path: '', redirectTo: '/troublemakers', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
