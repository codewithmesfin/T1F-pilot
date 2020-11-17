import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveProjectRoutingModule } from './active-project-routing.module';
import { ActiveProjectComponent } from './active-project.component';



//import angular material components
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [ActiveProjectComponent],
  imports: [
    CommonModule,
    ActiveProjectRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class ActiveProjectModule { }
