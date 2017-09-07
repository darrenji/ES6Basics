/**
 * Created by Darren on 2017/9/7.
 */

class Shape{
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }
}

class  Rectangle extends Shape{
    constructor(color, width, height){
        super(color);
        this.width=width;
        this.height=height;
    }

    getArea() {
        return this.width * this.height;
    }
}

let rectange = new Rectangle("red", 5, 8);
console.log(rectange.getArea());
console.log(rectange.getColor());
console.log(rectange.toString());