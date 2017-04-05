import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'


import { AppGenerationComponent } from './app-generation.component';
import { DependencyListComponent } from './dependencies/dependency-list.component';
import { DependencyCardComponent } from './dependencies/dependency-card.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { AppGenerationRoutingModule } from './app-generation-routing.module'

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      AppGenerationRoutingModule
  ],
  declarations: [
    AppGenerationComponent,
    DependencyListComponent,
    DependencyCardComponent,
    GeneralInfoComponent
  ],
  providers: [],
  exports: [AppGenerationComponent]
})
export class AppGenerationModule {}