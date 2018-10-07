export class Option{
    name: string;
    value: any;
    constructor(obj?:any){
        this.name = obj && obj.name || '';
        this.value = obj && obj.value || {};
    }
}