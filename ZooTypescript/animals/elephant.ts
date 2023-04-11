import { Animal } from "./animal";

export class Elephant extends Animal {

    private species = "Elephant";


    public constructor(name :string, age : number, weight : number, height: number){

        super(name, age, weight, height);
        
    }

    public getSpecies() :string{return this.species;}



}