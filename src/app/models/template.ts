import { Dependency } from './dependency'

export class Template {

    id: string;
    name: string = '';
    creator: string = '';
    dependencies: Dependency[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : string {
        return this.id + " " + this.name;
    }
}
