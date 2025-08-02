{
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = { shape: 'circle', radius: number };
    type Rectangle = { shape: 'rectangle', height: number, width: number };
    type Shape = Circle | Rectangle;

    const calculateShapeArea = (param: Shape): number => {

        if (param.shape === 'circle') {
            return Math.PI * param.radius * param.radius;
        } else {
            return param.height * param.width;
        }
    }

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({ shape: "rectangle", height: 5, width: 5 });
    console.log(rectangleArea);
    console.log(circleArea);

    //
}