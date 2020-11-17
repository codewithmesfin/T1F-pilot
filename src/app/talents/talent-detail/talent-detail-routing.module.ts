import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TalentDetailComponent } from './talent-detail.component';

const routes: Routes = [{ path: '', component: TalentDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentDetailRoutingModule { }
