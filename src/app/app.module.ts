import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrameworkService, ForgeApplicationService } from './services';

import { AppGenerationModule } from './app-generation/app-generation.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppGenerationModule,    
    SharedModule
  ],
  providers: [FrameworkService, ForgeApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
