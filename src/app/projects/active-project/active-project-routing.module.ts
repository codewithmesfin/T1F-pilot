import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveProjectComponent } from './active-project.component';

const routes: Routes = [{ path: '', component: ActiveProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveProjectRoutingModule { }
