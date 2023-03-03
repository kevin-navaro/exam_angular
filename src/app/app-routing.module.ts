import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionComponent} from "./region/region.component";
import {DepartmentComponent} from "./department/department.component";
import {CityComponent} from "./city/city.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: 'regions', component: RegionComponent},
  { path: 'departements', component: DepartmentComponent},
  { path: 'communes', component: CityComponent},
  // { path: 'communes/:comms', component: CityComponent},
  { path: '**', component: RegionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
