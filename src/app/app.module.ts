import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { ConfigModule, ConfigLoader, ConfigHttpLoader } from '@nglibs/config';


import { AppComponent } from './app.component';
import {  FrameworkService, 
          DependencyService, 
          TemplateService,
          ForgeApplicationService 
        } from './services';

import { AppGenerationModule } from './app-generation/app-generation.module'
import { DependencySubmissionModule } from './dependency-submission/dependency-submission.module'
import { SharedModule } from './shared/shared.module'
import { HeaderComponent, SidenavComponent } from './shared'
import { AppRoutingModule } from './app.routes'

import {environment} from '../environments/environment';

export function configFactory(http: Http): ConfigLoader {
  return new ConfigHttpLoader(http, environment.configUrl);
}

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
    AppRoutingModule,
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: (configFactory),
      deps: [Http]
    }),
  ],
  providers: [FrameworkService, DependencyService, TemplateService, ForgeApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
