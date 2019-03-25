import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiComponent } from './event-emitter/pai/pai.component';

const routes: Routes = [
  {   path  : '',        pathMatch     : 'full',  redirectTo  : 'home'  },
  {   path  : 'home',    component   : PaiComponent
}    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
