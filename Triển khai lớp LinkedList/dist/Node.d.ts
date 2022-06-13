export declare class Node<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T);
    readData(): T;
}
