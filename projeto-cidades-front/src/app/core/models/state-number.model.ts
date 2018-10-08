import { State } from "./state.model";

export class StateNumber {

    private state: State;
    private numberOfCities: Number;
    constructor(obj?: any) {
        this.state = obj && obj.state || {};
        this.numberOfCities = obj && obj.numberOfCities || new Number(0);
    }
}