"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gorilla_1 = require("./animals/gorilla");
var animals = [];
var gorilla1 = new gorilla_1.Gorilla("Georges", 19, 60, 140);
animals.push(gorilla1);
console.log(animals[0].getName + " identified by " + animals[0].getId);
