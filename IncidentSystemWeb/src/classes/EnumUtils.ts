export class EnumMapper<T extends { [name: string]: any }> {

    constructor(public enumObject: T) { }

    getEnumAsString(key: string | number): string {
        if (typeof key === 'string') {
            return this.enumObject[this.enumObject[key]];
        } else if (typeof key === 'number') {
            return this.enumObject[key];
        } else {
            throw new Error(`Unable to parse enum from ${typeof (key)}`);
        }
    }
}