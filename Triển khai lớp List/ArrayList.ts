import { IArrayList } from './IArrayList';
export class ArrayList<T> implements IArrayList<T>{
    container: Array<T>;

    constructor(){
        this.container = [];
    }

    add(t: T): void{
        this.container.push(t);
    }
    get(index: number): T{
        return this.container[index];
    }
    remove():void{
        this.container = [];
    }
    size(): number{
        return this.container.length
    }
}