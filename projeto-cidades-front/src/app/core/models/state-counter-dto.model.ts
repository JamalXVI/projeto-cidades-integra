import { State } from "./state.model";

export class StateCounterDto{
    state: State;
    numberOfCities: Number;
    constructor(obj?: any){
        this.state = obj && obj.state || {};
        this.numberOfCities = obj && obj.numberOfCities || new Number(0);
    }
}