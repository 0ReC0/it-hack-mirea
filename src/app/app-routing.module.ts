import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorePlanComponent } from './store-plan/store-plan.component'
import { VrModuleComponent } from './vr-module/vr-module.component'

const routes: Routes = [
  {
    path: '',
    component:StorePlanComponent
 },
 {
   path:'app-store-plan',
   component:StorePlanComponent
  },
 {
   path:'app-vr-module',
   component:VrModuleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
