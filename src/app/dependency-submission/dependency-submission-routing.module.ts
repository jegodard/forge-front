import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencySubmissionComponent }    from './dependency-submission.component';

const DepSubmissionRoutes: Routes = [
  { path: 'dependency-submission',  component: DependencySubmissionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(DepSubmissionRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DependencySubmissionRoutingModule { }