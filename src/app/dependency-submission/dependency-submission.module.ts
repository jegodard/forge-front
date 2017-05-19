import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'

import { DependencySubmissionComponent } from './dependency-submission.component';
import { DependencySubmissionRoutingModule } from './dependency-submission-routing.module' 


@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      DependencySubmissionRoutingModule
  ],
  declarations: [
    DependencySubmissionComponent
  ],
  providers: [],
  exports: []
})
export class DependencySubmissionModule {}