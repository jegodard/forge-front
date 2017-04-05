import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/app-generation', pathMatch: 'full' },
  { path: 'submit',   redirectTo: '/dependency-submission', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}