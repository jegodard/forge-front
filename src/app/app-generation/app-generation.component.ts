import { Component, ViewChild, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as FileSaver from 'file-saver';

import { ForgeApplication, Framework, Dependency } from '../models';
import { ForgeApplicationService, FrameworkService } from '../services';

import { DependencyListComponent } from './dependencies/dependency-list.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { DownloadModalComponent } from '../shared/download-modal.component';

@Component({
    selector: 'app-generation',
    templateUrl: './app-generation.component.html',
    styles: [`.error {
                color: #F44336;
                display: block;
                position: absolute;
                transition: .2s opacity ease-out, .2s color ease-out;
                font-size: 12px
            }`
    ],
    providers: [DependencyListComponent, GeneralInfoComponent]
})
export class AppGenerationComponent implements OnInit {
    
    @ViewChild(DependencyListComponent) 
    private dependencyListComponent;

    @ViewChild(DownloadModalComponent)
    private downloadModal: DownloadModalComponent;
    
    private forgeAppForm: FormGroup;
    
    private selectedFramework: Framework; 

    private frameworks: Framework[];

    private generatedApp: Blob

    constructor(private forgeApplicationService: ForgeApplicationService, private frameworkService: FrameworkService) { }

    ngOnInit() {
        this.forgeAppForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            group: new FormControl('', Validators.required),
            user: new FormControl('', Validators.required),
            frameworkId: new FormControl('', Validators.required),
            frameworkVersion: new FormControl('', Validators.required)
        });
        
        // Retrieve frameworks list
        this.frameworkService.getFrameworks().subscribe( frameworks => {
            this.frameworks = frameworks
            this.frameworks.sort()
        });
    }
    
    /**
     * Method called when user select a framework
     */
    onFrameworkSelected(event) {
        this.selectedFramework = event.framework;
        this.selectedFramework.dependencies.sort(function(a, b){
            var aM = a.name.toUpperCase();
            var bM = b.name.toUpperCase();
            return (aM < bM) ? -1 : (aM > bM) ? 1 : 0;
        });
        let version = event.version
    }

    /**
     * When user ask to forge an app 
     */
    onSubmit({ value, valid }: { value: ForgeApplication, valid: boolean }) {
        console.log("Generate application...")
         
        if(valid) {
            this.downloadModal.setInProgress();
            value.dependenciesId = this.dependencyListComponent.selectedDependencies.map(dependency => dependency.id)
            this.forgeApplicationService.forgeApplication(value)
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
        FileSaver.saveAs(this.generatedApp, this.forgeAppForm.get('name').value +".zip");
    }
}