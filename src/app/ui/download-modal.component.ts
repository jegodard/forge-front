import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'download-modal',
  templateUrl : './download-modal.component.html'
})
export class DownloadModalComponent  {

    @Output() onDownload = new EventEmitter<boolean>();

    private inProgress: Boolean = false;
    
    constructor() {}
    
    setInProgress() {
        this.inProgress = true;
    }

    setDownloadable() {
        this.inProgress = false;
    }

    download() {
        this.onDownload.emit();
    }
}