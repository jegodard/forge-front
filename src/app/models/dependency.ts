import { FeatureFamily } from '../models'

export class Dependency {

    id: string;
    enabled: boolean;
    name: string = '';
    description: string;
    artifactId: string;
    groupId: string;
    version: string;
    scope: string;
    packaging: string;
    gitUrl: string;
    documentation: string;
    user: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : string {
        return this.id + " " + this.name;
    }
}
