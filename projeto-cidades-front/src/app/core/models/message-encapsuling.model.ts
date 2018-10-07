export class MessageEncapsuling<K>{
    public message: String;
    public payload: K;
    constructor(obj){
        this.message = obj && obj.message || '';
        this.payload = obj && obj.payload || {};
    }
}