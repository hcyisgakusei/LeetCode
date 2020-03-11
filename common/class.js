// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
//
// Point.prototype.toString = function () {
//     return `(${this.x},${this.y})`
// };
// 等价
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`
    }
}

console.log(typeof Point); //function
console.log(Point === Point.prototype.constructor); //true