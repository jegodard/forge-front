import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGenerationComponent }    from './app-generation.component';

const AppGenerationRoutes: Routes = [
  { path: 'app-generation',  component: AppGenerationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(AppGenerationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppGenerationRoutingModule { }