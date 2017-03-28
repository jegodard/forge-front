import { Dependency } from './dependency'

export class Framework {
    id: number;
    name: string = '';
    frameworkVersions: Version[];
    dependencies: Dependency[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : string {
        return this.id + " " + this.name;
    }
}

export class Version {
    version: string;
    gitGroup: string;
    gitProject: string;
}
