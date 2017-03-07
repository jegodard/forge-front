import { Component, ViewChild, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlankApplication } from '../models';
import { FeatureListComponent } from '../containers';
import { BlankApplicationService } from '../services';
import { DownloadModalComponent } from './download-modal.component';
import * as FileSaver from 'file-saver';

@Component({
    selector: 'blank-application',
    templateUrl: './blank-application.component.html',
    styles: [`.error {
                color: #F44336;
                display: block;
                position: absolute;
                transition: .2s opacity ease-out, .2s color ease-out;
                font-size: 12px
            }`
    ],
    providers: [FeatureListComponent]
})
export class BlankApplicationComponent implements OnInit {
    
    @ViewChild(FeatureListComponent) 
    private featureListComponent;

    @ViewChild(DownloadModalComponent)
    private downloadModal: DownloadModalComponent;
    
    private blankAppGroup: FormGroup;

    private generatedApp: Blob

    constructor(private blankApplicationService: BlankApplicationService) { }

    ngOnInit() {
        this.blankAppGroup = new FormGroup({
            artifactId: new FormControl('', [Validators.required, Validators.minLength(3)]),
            groupId: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required)
        });
    }

    onSubmit({ value, valid }: { value: BlankApplication, valid: boolean }) {
        console.log("Generate application...")
         
        if(valid) {
            this.downloadModal.setInProgress();
            let selectedFeatures = this.featureListComponent.selectedFeatures; 
            this.blankApplicationService.generateApplication(value, selectedFeatures)
                                        .subscribe(response => {                                
                                            this.generatedApp = response.blob();
                                            console.log(this.generatedApp.size + " bytes file downloaded. File type: ", this.generatedApp.type);
                                            this.downloadModal.setDownloadable()
                                        });
                                        
        }
    }

    onDownload() {
        FileSaver.saveAs(this.generatedApp, this.blankAppGroup.get('artifactId').value +".zip");
    }
}