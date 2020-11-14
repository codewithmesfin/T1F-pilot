import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [{
  path: '',
  component: PageLayoutComponent,
  children: [
    {
      path: 'projects',
      loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
    },
    {
      path: 'clients',
      loadChildren: () => import('../clients/clients.module').then(m => m.ClientsModule)
    },
    { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'talents', loadChildren: () => import('../talents/talents.module').then(m => m.TalentsModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
