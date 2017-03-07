export class FeatureFamily {

    id: number;
    name: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

    toString() : string {
        return this.id + " " + this.name;
    }
}
