import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//register. lazy loading routes dynamically
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  /*
  A layout route, the component of this route has 
  many child compomnents. The child components are 
  loaded dynamically based on the user action.
  */

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
