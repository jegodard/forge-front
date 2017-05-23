import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTemplateComponent }    from './app-template.component';

const AppTemplateRoutes: Routes = [
  { path: 'app-template/:id',  component: AppTemplateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(AppTemplateRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppTemplateRoutingModule { }