import { State } from "./state.model";

export class City{
    ibgeId: Number;
    state: State;
    name: String;
    nameWithOutAccent: String;
    alternativaName: String;
    capital: Boolean;
    longitude: Number;
    latitude: Number;
    microRegion: String;
    mesoRegion: String;

    constructor(obj?: any){
        this.ibgeId = obj && obj.ibgeId || new Number(0);
        this.state = obj && obj.state || new State();
        this.name = obj && obj.name || new String();
        this.nameWithOutAccent = obj && obj.nameWithOutAccent || new String();
        this.alternativaName = obj && obj.alternativaName || new String();
        this.capital = obj && obj.capital || new Boolean(false);
        this.longitude = obj && obj.longitude || new Number(0);
        this.latitude = obj && obj.latitude || new Number(0);
        this.microRegion = obj && obj.microRegion || new String();
        this.mesoRegion = obj && obj.mesoRegion || new String();
    }
}