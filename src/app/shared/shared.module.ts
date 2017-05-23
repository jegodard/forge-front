import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadModalComponent } from './download-modal.component';
import { ErrorModalComponent } from './error-modal.component';
import { DependencyListComponent } from './dependency/dependency-list.component';
import { DependencyCardComponent } from './dependency/dependency-card.component';

import { MapValuesPipe } from './pipes/mapvalues.pipe';
import { TitleCase } from './pipes/titlecase.pipe'
import { InitialsPipe } from './pipes/initials.pipe'

@NgModule({
  imports: [CommonModule],
  declarations: [
    DownloadModalComponent,
    ErrorModalComponent,
    DependencyListComponent,
    DependencyCardComponent,
    TitleCase,
    InitialsPipe,
    MapValuesPipe
  ],
  providers: [],
  exports: [
    DownloadModalComponent,
    ErrorModalComponent,
    DependencyListComponent,
    DependencyCardComponent,
    TitleCase,
    InitialsPipe,
    MapValuesPipe
  ]
})
export class SharedModule {}