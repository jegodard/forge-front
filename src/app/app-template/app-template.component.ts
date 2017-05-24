import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import * as FileSaver from 'file-saver';

import { Template, TemplateInstance } from '../models'
import { TemplateService } from '../services';

import { DownloadModalComponent } from '../shared/download-modal.component';

@Component({
    selector: 'app-template',
    templateUrl: 'app-template.component.html',
    styles: [`.circle-badge {
                background-color:#FFD180;
                height:120px;
                width:120px;
                line-height: 120px;
                text-align:center;
                font-size: 3em;
                color: white;
                margin-top:20px;
            }`
    ],
    
})
export class AppTemplateComponent implements OnInit {

    private template: Template;

    private templateAppForm: FormGroup;

    @ViewChild(DownloadModalComponent)
    private downloadModal: DownloadModalComponent;
    
    private generatedApp: Blob

    constructor(private activatedRoute: ActivatedRoute, private templateService: TemplateService) { }

    ngOnInit() { 
        this.templateAppForm = new FormGroup({ 
            name: new FormControl('', Validators.required),
            groupId: new FormControl('', Validators.required),
            user: new FormControl('', Validators.required)
        });

        this.activatedRoute.params.subscribe(params => {
            var templateId = params['id']; 
            this.templateService.getTemplate(templateId)
                                .subscribe(
                                    template => this.template = template
                                );
        });
    }

    onSubmit(templateInstance: TemplateInstance, isValid: boolean) {
        if(isValid) {
            templateInstance.templateId = this.template.id
            console.log(templateInstance)
            this.downloadModal.show();
            this.downloadModal.setInProgress();
            this.templateService.postInstanciateTemplate(templateInstance)
                                        .subscribe(response => {                                
                                            this.generatedApp = response.blob();
                                            console.log(this.generatedApp.size + " bytes file downloaded. File type: ", this.generatedApp.type);
                                            this.downloadModal.setDownloadable()
                                        });                                                
        }
    }

    /**
     * When the user download the app forged before
     */
    onDownload() {
        FileSaver.saveAs(this.generatedApp, this.templateAppForm.get('name').value +".zip");
        this.downloadModal.close();
    }
}