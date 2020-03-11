export default class HitCounter{
    private _counter: number

    constructor(){
        this._counter = 0;
    }

    get counter(): number{
        return this._counter;
    }

    incrementCounter(){
        this._counter += 1;
    }
}