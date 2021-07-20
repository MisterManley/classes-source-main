// For each class, consider:
// what parameters should its contstructor take in?
// what state does it need?
// what methods does it need?


// create a new class called Circle
// cheat sheet: the radius of a circle is the distance from the center to the edge. A circle's perimeter is equal to 2 * pi * radius. A circle's area is equal to pi * radius * radius
// Write your Circle class here

// class Circle {
//     constructor(radius, perimeter, area){
        
//         this.radius = radius;
//         this.perimeter = 2 * Math.PI * this.radius;
//         this.area = Math.PI * this.radius * this.radius
        
//     }

    

   
// }

// let myCircle = new Circle(3) ;
// console.log(myCircle.radius === 3);
// console.log(myCircle.perimeter > 18.849 && myCircle.perimeter < 18.85);
// console.log(myCircle.area > 28.274 && myCircle.area < 28.275);
// console.log(myCircle.perimeter);
// console.log(myCircle.area);




// // create a new class called Triangle
// // cheat sheet: a triangle's perimeter is equal to the sum of all its sides. A triangle is a right triangle if (first side)^2 + (second side)^2 === (third side)^2
// // Write your Triangle class here

// class Triangle{
//     constructor(firstSide, secondSide, thirdSide){
//         this.firstSide = firstSide;
//         this.secondSide = secondSide;
//         this.thirdSide = thirdSide;
//         this.perimeter = firstSide + secondSide + thirdSide;

//     }

//     isRight(){
//         if(
//             (this.thirdSide * this.thirdSide) === ((this.secondSide * this.secondSide) + (this.firstSide * this.firstSide)) 
//         || 
//             (this.secondSide * this.secondSide) === ((this.thirdSide * this.thirdSide) + (this.firstSide * this.firstSide))
//         || 
//             (this.firstSide * this.firstSide) === ((this.thirdSide * this.thirdSide) + (this.secondSide * this.secondSide))
//         ) {
//         return true;
//         } else {
//             return false;
//         }
//     }
// }

// const myTriangle = new Triangle(2, 5, 6);
// console.log(myTriangle.firstSide === 2);
// console.log(myTriangle.secondSide === 5);
// console.log(myTriangle.thirdSide === 6);
// console.log(myTriangle.perimeter === 13);
// console.log(myTriangle.isRight === false);





// // create a new class called Rectangle
// // cheat sheet: a rectangle's area is equal to the width times the height. a rectangle's area is equal to the sum of all its sides (drawing a picture might help here)
// // Write your Rectangle class here


// class Rectangle {

//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//         this.area = width * height;
//         this.perimeter = (width * 2) + (height * 2);
//     }

// }

// const myRectangle = new Rectangle(3, 5);
// console.log(myRectangle.width === 3);
// console.log(myRectangle.height === 5);
// console.log(myRectangle.perimeter === 16);
// console.log(myRectangle.area === 15);


// // create a new class called Square
// // cheat sheet: a square is just a rectangle where the width and the height are the same! the tricky part here is building the right constructor. once that is done, the Rectangle class will do all the work. in other words, you should not have to define a new perimeter and area for the square.
// // Write your Square class here

// class Square extends Rectangle{
//     constructor(width, height, length){
//        super(width, height);
//         this.height = this.width;
//         this.perimeter = width * 4;
//         this.area = width * width;
       
        
    
//     }

// }

// const mySquare = new Square(2);
// console.log(mySquare instanceof Rectangle === true);
// console.log(mySquare.width === 2);
// console.log(mySquare.height === 2);
// console.log(mySquare.perimeter === 8);
// console.log(mySquare.area === 4);


//Let's make a factory object, declare as a "singleton"

// class Car {
//     constructor(serialNumber){
//         this.serialNumber = serialNumber;
//     }

//     drive(){
//         console.log("vroom!");    }
// }

// const factory = {
//     cars: [],
//     generateCar(){
//         const newCar = new Car(this.cars.length);
//         this.cars.push(newCar);
//         return newCar;
//     },
//     findCar(index){
//         return this.cars[index]
//     }
// }


// factory.generateCar();
// factory.generateCar();
// // console.log(factory); 
// console.log(factory.findCar(0));
// factory.cars[0].drive();

//You can also have a factory that is an instantiation of a class (rather than a factory that is a singleton object)


class Car {
    constructor(maker, serialNumber){
        this.maker = maker;
        this.serialNumber = serialNumber;
    }

    drive(){
        console.log("VROOM!");
    }
}


class AutoPlant {
    constructor(maker){
        this.maker = maker;
        this.cars = [];
    }

    generateCar(){
        const newCar = new Car(this.maker, this.cars.length);
        this.cars.push(newCar);
        return newCar;
    }

    findCar(index){
    return this.cars[index];
    }
}

const toyotaPlant = new AutoPlant("Toyota");
const bmwPlant = new AutoPlant("BMW");
toyotaPlant.generateCar();
console.log(toyotaPlant.findCar(0));


// ==================
// TEST SUITE BEGINS HERE
// ==================

// Circle tests:
// const myCircle = new Circle(3);
// console.log(myCircle.radius === 3);
// console.log(myCircle.perimeter() > 18.849 && myCircle.perimeter() < 18.85);
// console.log(myCircle.area() > 28.274 && myCircle.area() < 28.275);



// Triangle tests:
// const myTriangle = new Triangle(2, 5, 6);
// console.log(myTriangle.side1 === 2);
// console.log(myTriangle.side2 === 5);
// console.log(myTriangle.side3 === 6);
// console.log(myTriangle.perimeter() === 13);
// console.log(myTriangle.isRightTriangle() === false);

// const myRightTriangle = new Triangle(3,4,5);
// console.log(myRightTriangle.side1 === 3);
// console.log(myRightTriangle.side2 === 4);
// console.log(myRightTriangle.side3 === 5);
// console.log(myRightTriangle.perimeter() === 12);
// console.log(myRightTriangle.isRightTriangle() === true);


// Rectangle tests:
// const myRectangle = new Rectangle(3, 5);
// console.log(myRectangle.width === 3);
// console.log(myRectangle.height === 5);
// console.log(myRectangle.perimeter() === 16);
// console.log(myRectangle.area() === 15);


// Square tests
// const mySquare = new Square(2);
// console.log(mySquare instanceof Rectangle === true);
// console.log(mySquare.width === 2);
// console.log(mySquare.height === 2);
// console.log(mySquare.perimeter() === 8);
// console.log(mySquare.area() === 4);
