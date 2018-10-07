export class State{
    id: Number;
    name: String;
    constructor(obj?: any){
        this.id = obj && obj.id || new Number(0);
        this.name = obj && obj.name || new String();
    }
}