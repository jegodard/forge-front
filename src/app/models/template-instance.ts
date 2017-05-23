export class TemplateInstance {

    name: String = '';
    
    groupId: String = '';
    
    user: String = '';
    
    templateId: String = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : String {
        return this.name;
    }
}
