"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gorilla = void 0;
var animal_1 = require("./animal");
var Gorilla = /** @class */ (function (_super) {
    __extends(Gorilla, _super);
    function Gorilla(name, age, weight, height) {
        var _this = _super.call(this, name, age, weight, height) || this;
        _this.species = "Gorilla";
        return _this;
    }
    Gorilla.prototype.getSpecies = function () { return this.species; };
    return Gorilla;
}(animal_1.Animal));
exports.Gorilla = Gorilla;
