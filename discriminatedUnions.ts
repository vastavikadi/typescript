interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}
type Shape = Circle | Square;
function getTrueShape(shape: Shape) {
  //this is an example of discriminative unions
  if (shape.kind === "circle") {
    //this way it checks the type pretty easily and get the things done
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}

//this is an example of exhaustiveness checking
type Shape2 = Circle | Square | Rectangle; //now we have another type called rectangle for the shapes and suppose we forgot to handle it then adding default one with never type is going to show errors indicating that not all cases been handled some are left, suppose if someone added a new type so having it is a safe side
function getArea(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.breadth * shape.length;
    default:
      const _defaultShapeChecks: never = shape;
      return _defaultShapeChecks;
  }
}
