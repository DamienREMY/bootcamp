export interface Identity{

    setName(name: string): void;
    setAge(age: number): void;
    setId(id: string): void;

    getName(): string;
    getAge(): number;
    getId(): string;

}