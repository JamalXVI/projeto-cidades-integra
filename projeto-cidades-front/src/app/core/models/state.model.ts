export class State{
    id: Number;
    uf: String;
    constructor(obj?: any){
        this.id = obj && obj.id || new Number(0);
        this.uf = obj && obj.uf || new String();
    }
}