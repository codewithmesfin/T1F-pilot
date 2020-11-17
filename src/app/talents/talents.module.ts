import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentsRoutingModule } from './talents-routing.module';
import { TalentsComponent } from './talents.component';

//import angular material components
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [TalentsComponent],
  imports: [
    CommonModule,
    TalentsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class TalentsModule { }
