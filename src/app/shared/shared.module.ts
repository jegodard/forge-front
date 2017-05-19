import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadModalComponent } from './download-modal.component';
import { ErrorModalComponent } from './error-modal.component';
import { MapValuesPipe } from './pipes/mapvalues.pipe';
import { TitleCase } from './pipes/titlecase.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [
    DownloadModalComponent,
    ErrorModalComponent,
    TitleCase,
    MapValuesPipe
  ],
  providers: [],
  exports: [
    DownloadModalComponent,
    ErrorModalComponent,
    TitleCase,
    MapValuesPipe
  ]
})
export class SharedModule {}