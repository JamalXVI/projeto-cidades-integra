import { StateCounterDto } from "./state-counter-dto.model";
import { City } from "./city.model";

export class CuriositiesDto{
    stateCounterDto:StateCounterDto[];
    numberOfCities: Number;
    mostDistancedCities: City[];
    constructor(obj?: any){
        this.stateCounterDto = obj && obj.stateCounterDto || {};
        this.numberOfCities = obj && obj.numberOfCities || new Number(0);
        this.mostDistancedCities = obj && obj.mostDistancedCities || [];
    }
}