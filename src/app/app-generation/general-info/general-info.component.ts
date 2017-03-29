import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Framework, Version } from '../../models'
import { FrameworkService } from '../../services'

@Component({
    selector: 'general-info',
    templateUrl: 'general-info.component.html'
})
export class GeneralInfoComponent {
    
    @Input('formGroup')
    public forgeAppForm: FormGroup;

    @Input('frameworks')
    private frameworks: Framework[];

    private frameworkVersions: String[];

    private selectedFramework: Framework;

    @Output() 
    onFrameworkSelected = new EventEmitter();
    
    
    constructor() {}

    updateFrameworkVersion(frameworkId) {
        this.selectedFramework = this.frameworks.find(f => f.id == frameworkId)
        
        if(this.selectedFramework != null) {
            this.frameworkVersions = [];
            for (let frameworkVersion of this.selectedFramework.frameworkVersions) {               
                this.frameworkVersions.push(frameworkVersion.version)
            }
            this.frameworkVersions.sort()
        }

        this.onFrameworkSelected.emit({framework: this.selectedFramework})
    }

    frameworkSelected(event) {
        this.onFrameworkSelected.emit({framework: this.selectedFramework, version: event.value})
    }
}