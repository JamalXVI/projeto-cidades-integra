import { StateCounterDto } from "./state-counter-dto.model";

export class CuriositiesDto{
    stateCounterDto:StateCounterDto;
    constructor(obj?: any){
        this.stateCounterDto = obj && obj.stateCounterDto || new StateCounterDto();
    }
}