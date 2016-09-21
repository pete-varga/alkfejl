"use strict";

const cim = {
    varos: 'Budapest',
    utca: "Pazmany Peter setany",
    hazszam: `1/c`,
    toString(){ //vagy toString: function(){}
        return `${this.varos}, ${this.utca}`;
    }
};

console.log(cim);
console.log(cim.toString());

////////////////

class Point {
    constructor(x, y){
        this._x = x; //_: privatnak tekintendo, de minden publikus
        this._y = y;
    }
    setX(value){
        this._x = value;
    }
    set x(value){
        this._x = value;
    }
    get x(){
        return this._x;
    }
}

class Circle extends Point {
    constructor(x, y, r){
        super(x, y);
        this._r = r;
    }
}

const p1 = new Point(10, 20);
const c1 = new Circle(100, 200, 5);
//p1.setX(5);
p1.x = 5;
console.log(p1);
console.log(c1);