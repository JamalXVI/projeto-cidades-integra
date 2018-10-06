export class MessageEncapsuling<K>{
    public message: String;
    public payload: K;
    constructor(obj){
        this.message = obj && obj.errorDescription || '';
        this.payload = obj && obj.payload || {};
    }
}