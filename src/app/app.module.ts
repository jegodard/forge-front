import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrameworkService, ForgeApplicationService } from './services';

import { AppGenerationModule } from './app-generation/app-generation.module'
import { DependencySubmissionModule } from './dependency-submission/dependency-submission.module'
import { SharedModule } from './shared/shared.module'
import { HeaderComponent, SidenavComponent } from './shared'
import { AppRoutingModule } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppGenerationModule,
    DependencySubmissionModule,    
    SharedModule,
    AppRoutingModule
  ],
  providers: [FrameworkService, ForgeApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
