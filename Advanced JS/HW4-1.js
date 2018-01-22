function Shape(x, y, color) {
    this.x=x,
    this.y=y,
    this.color=color;
  }
  Shape.prototype.method = function()
  {
   return Math.round(Math.sqrt (Math.pow(this.x, 4) + Math.pow(this.y, 4)))
  }
  Shape.prototype.toString = function(){
    return 'X = '+ this.x + ', ' + 'Y = ' + this.y + ', ' + 'Color = ' + this.color;
  }
  
  function Circle (x, y, color, radius){
    Shape.apply(this, [x, y, color]);
    this.radius = radius;
  }
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  Circle.prototype.toString = function(){
    return `X=${this.x}, Y=${this.y}, Color=${this.color}, Radius=${this.radius}`
  }
  Circle.prototype.Pi = 3.14;
  Circle.prototype.getArea = function(){
    return Math.round(4*this.Pi*Math.pow(this.radius, 2));
  }
  Circle.prototype.getPerimeter = function(){
    return Math.round(2*this.Pi*this.radius)
  }
  let figure = new Circle(5, 9, 'green', 6);
  console.log(figure.toString())
  console.log(figure.method())
  console.log(figure.getArea())
  console.log(figure.getPerimeter())
  console.log(figure.Pi)