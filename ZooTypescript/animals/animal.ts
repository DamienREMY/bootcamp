import { Identity } from "../abstracts/identity";

export class Animal implements Identity{

    private name: string;
    private age: number;
    private height: number;
    private weight: number;

    private id: string;

    private static numberAnimals = 0;

    // Amimal constructor

    public constructor(name: string, age: number, height: number, weight : number){

        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;

        Animal.numberAnimals++;
        this.id = name.substring(1,3) + "_" + Math.random().toString().slice(2).substring(1,4);
    }

    

    // Setters animal properties

    public setName(name : string): void {this.name = name;}
    public setAge(age: number): void {this.age = age;}
    public setHeight(height: number): void {this.height = height;}
    public setWeight(weight: number): void {this.weight = weight;}
    public setId(id: string): void {this.id = id;}

    // Getters animal properties
    
    public getName(): string {return this.name;}
    public getAge(): number {return this.age;}
    public getHeight(): number {return this.height;}
    public getWeight(): number {return this.weight;}
    public getId(): string {return this.id;}

    public getNumberAnimals(): number{return Animal.numberAnimals;}

}