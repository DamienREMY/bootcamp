import { Animal } from "./animals/animal";
import { Elephant } from "./animals/elephant";
import { Gorilla } from "./animals/gorilla";

let animals: Animal[] = [];

let gorilla1 = new Gorilla("Georges", 19, 60, 140);

animals.push(gorilla1);

console.log(animals[0].getName + " identified by " + animals[0].getId);