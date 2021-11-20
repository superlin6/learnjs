const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
}
const shape1 = {
    radius: 20
}
console.log(shape.diameter());//20
console.log(shape.diameter.call(shape1));//40
console.log(shape.perimeter.call(shape1));//NaN
