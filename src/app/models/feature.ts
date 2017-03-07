import { FeatureFamily } from '../models'

export class Feature {

    id: number;
    name: string = '';
    enabled: boolean;
    description: string;
    featureFamily: FeatureFamily;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : string {
        return this.id + " " + this.name;
    }
}
