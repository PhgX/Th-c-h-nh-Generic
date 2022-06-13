import { Node } from "./Node";
export declare class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;
    constructor();
    insertFirstNode(data: T): void;
    insertLastNode(data: T): void;
    getSize(): number;
    readList(): T[];
}
