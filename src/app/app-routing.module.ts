import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PageLayoutComponent } from './page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./page-layout/page-layout.module').then(m =>
        m.PageLayoutModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
