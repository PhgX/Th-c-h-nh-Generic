import { IArrayList } from './IArrayList';
export declare class ArrayList<T> implements IArrayList<T> {
    container: Array<T>;
    constructor();
    add(t: T): void;
    get(index: number): T;
    remove(): void;
    size(): number;
}
