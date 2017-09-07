class Stack
{
    constructor(){
        this._elements=[];
    }

    get len() {
        return this._elements.length;
    }

    push (element){
        this._elements.push(element);
    }

    pop() {
        return this._elements.pop();
    }
}
