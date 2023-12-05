import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'details/:id', component: DetailsComponent },
  { path: '', component: TableComponent }, 
  { path: '**', component: TableComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
