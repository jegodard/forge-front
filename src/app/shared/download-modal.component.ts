import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

declare var downloadModal: any;

@Component({
  selector: 'download-modal',
  templateUrl : './download-modal.component.html'
})
export class DownloadModalComponent  {

    @Output() onDownload = new EventEmitter<boolean>();

    private generatedId: String;

    private inProgress: Boolean = false;
    
    constructor() {}

    ngOnInit() {
        this.generatedId = Math.random().toString(36).slice(2)
        downloadModal.init(this.generatedId);
    }
    
    show() {
        downloadModal.open(this.generatedId);
    }

    close() {
        downloadModal.close(this.generatedId);
    }

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