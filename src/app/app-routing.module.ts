import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstscreenComponent} from './firstscreen/firstscreen.component';
import {FirstmainComponent} from './firstmain/firstmain.component';
import {SecondmainComponent} from './secondmain/secondmain.component';
const routes: Routes = [
  {path:'', component:FirstscreenComponent, pathMatch:'full'},
  {path:'in', component:FirstmainComponent, pathMatch :'full'},
  {path: 'outcome', component: SecondmainComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
