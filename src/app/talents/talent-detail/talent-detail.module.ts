import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentDetailRoutingModule } from './talent-detail-routing.module';
import { TalentDetailComponent } from './talent-detail.component';


//import angular material components
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationInfoComponent } from './education-info/education-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { VisibleInfoComponent } from './visible-info/visible-info.component';
import { BankInfoComponent } from './bank-info/bank-info.component';

@NgModule({
  declarations: [TalentDetailComponent, PersonalInfoComponent, EducationInfoComponent, ExperienceComponent, VisibleInfoComponent, BankInfoComponent],
  imports: [
    CommonModule,
    TalentDetailRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class TalentDetailModule { }
