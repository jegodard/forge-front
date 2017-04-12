import { Component, ViewChild, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Framework, Dependency } from '../models'
import { FrameworkService } from '../services';

@Component({
    selector: 'dependency-submission',
    templateUrl: './dependency-submission.component.html',
    styles: [],
    providers: []
})
export class DependencySubmissionComponent implements OnInit  {

    private dependSubmitForm : FormGroup
    
    private frameworks: Framework[];
    private frameworkVersions: String[];
    private selectedFramework: Framework;

    constructor(private frameworkService: FrameworkService) {}

    ngOnInit() {
        this.dependSubmitForm = new FormGroup({       
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            frameworkId: new FormControl('', Validators.required),
            frameworkVersion: new FormControl('', Validators.required),
            artifactId: new FormControl('', Validators.required),
            groupId: new FormControl('', Validators.required),
            version: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            scope: new FormControl('', Validators.required),
            user: new FormControl('', Validators.required),
            packaging: new FormControl(''),
            gitUrl: new FormControl(''),
            documentation: new FormControl('')
        });

        // Retrieve frameworks list
        this.frameworkService.getFrameworks().subscribe( frameworks => {
            this.frameworks = frameworks
            this.frameworks.sort()
        });
    }

    updateFrameworkVersion(frameworkId) {
        this.selectedFramework = this.frameworks.find(f => f.id == frameworkId)
        
        if(this.selectedFramework != null) {
            this.frameworkVersions = [];
            for (let frameworkVersion of this.selectedFramework.frameworkVersions) {               
                this.frameworkVersions.push(frameworkVersion.version)
            }
            this.frameworkVersions.sort()
        }
    }

    /**
     * When user propose a dependency
     */
    onSubmit(model: Dependency, isValid: boolean) {
        console.log("Send dependency proposition...")
         
        if(isValid) {
            this.frameworkService.postWaitingDependency(model)
                                    .subscribe(response => {console.log(response)
                                });                                        
        }
    }
}
    