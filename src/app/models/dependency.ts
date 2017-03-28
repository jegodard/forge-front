import { FeatureFamily } from '../models'

export class Dependency {

    id: string;
    name: string = '';
    enabled: boolean;
    description: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : string {
        return this.id + " " + this.name;
    }
}
