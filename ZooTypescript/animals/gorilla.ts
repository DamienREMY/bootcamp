import { Animal } from "./animal";

export class Gorilla extends Animal {

    private species  = "Gorilla";

    public constructor(name :string, age : number, weight : number, height: number){

        super(name, age, weight, height);
        
    }

    public getSpecies(): string {return this.species;}



}