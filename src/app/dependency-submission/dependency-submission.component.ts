import { Component, ViewChild, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Dependency } from '../models'

@Component({
    selector: 'dependency-submission',
    templateUrl: './dependency-submission.component.html',
    styles: [],
    providers: []
})
export class DependencySubmissionComponent implements OnInit  {

    private dependSubmitForm : FormGroup

    ngOnInit() {
        this.dependSubmitForm = new FormGroup({       
            name: new FormControl('', [Validators.required, Validators.minLength(3)]),
            artifactId: new FormControl('', Validators.required),
            groupId: new FormControl('', Validators.required),
            version: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            scope: new FormControl('', Validators.required)
        });
    }

    /**
     * When user propose a dependency
     */
    onSubmit({ value, valid }: { value: Dependency, valid: boolean }) {
        console.log("Send dependency proposition...")
         
        if(valid) {
                                        
        }
    }
}
    