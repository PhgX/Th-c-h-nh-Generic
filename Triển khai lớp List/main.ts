import { ArrayList } from './ArrayList';
interface POST {
    title: string;
    index: number;
}

let arraylist = new ArrayList<POST>();

arraylist.add({title: 'hello', index: 12});
arraylist.add({title: 'hi', index: 45});
arraylist.add({title: 'xinchao', index: 33});

arraylist.get(2);
console.log(arraylist.size());
console.log(arraylist.get(2));
console.log(arraylist.container);