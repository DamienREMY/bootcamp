"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = exports.Animal = /** @class */ (function () {
    // Amimal constructor
    function Animal(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        Animal.numberAnimals++;
        this.id = name.substring(1, 3) + "_" + Math.random().toString().slice(2).substring(1, 4);
    }
    // Setters animal properties
    Animal.prototype.setName = function (name) { this.name = name; };
    Animal.prototype.setAge = function (age) { this.age = age; };
    Animal.prototype.setHeight = function (height) { this.height = height; };
    Animal.prototype.setWeight = function (weight) { this.weight = weight; };
    Animal.prototype.setId = function (id) { this.id = id; };
    // Getters animal properties
    Animal.prototype.getName = function () { return this.name; };
    Animal.prototype.getAge = function () { return this.age; };
    Animal.prototype.getHeight = function () { return this.height; };
    Animal.prototype.getWeight = function () { return this.weight; };
    Animal.prototype.getId = function () { return this.id; };
    Animal.prototype.getNumberAnimals = function () { return Animal.numberAnimals; };
    Animal.numberAnimals = 0;
    return Animal;
}());
