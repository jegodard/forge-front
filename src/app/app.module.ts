import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeatureListComponent } from './containers';
import { 
  FeatureCardComponent,
  BlankApplicationComponent,
  DownloadModalComponent
} from './ui';
import { FeatureService, BlankApplicationService } from './services';
import { TitleCase, MapValuesPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    BlankApplicationComponent,
    FeatureListComponent,
    FeatureCardComponent,
    DownloadModalComponent,
    TitleCase,
    MapValuesPipe    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FeatureService, BlankApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
