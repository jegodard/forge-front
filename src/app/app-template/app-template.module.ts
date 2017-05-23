import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'

import { AppTemplateComponent }   from './app-template.component';
import { AppTemplateRoutingModule } from './app-template-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppTemplateRoutingModule
  ],
  exports: [],
  declarations: [AppTemplateComponent],
  providers: [],
})
export class AppTemplateModule { }
