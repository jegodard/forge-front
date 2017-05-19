import {
  Component,
  Input,
  Output,
  OnInit
} from '@angular/core';

declare var errorModal: any;

@Component({
  selector: 'error-modal',
  templateUrl : './error-modal.component.html',
})
export class ErrorModalComponent implements OnInit {

    private code: String;
    private error: String;
    private message: String;
    private generated_id: String;
    
    constructor() {}

    ngOnInit() {
        this.generated_id = Math.random().toString(36).slice(2)
        errorModal.init(this.generated_id);
    }

    show(code : String, error : String, message : String) {
        this.code = code
        this.message = message
        this.error = error
        errorModal.open(this.generated_id);
    }

    showDefault() {
        this.show("500", "Forge error", "The Forge has encountered a problem. Please contact the administrator for more details.")
    }

    close() {
        errorModal.close(this.generated_id);
    }
}