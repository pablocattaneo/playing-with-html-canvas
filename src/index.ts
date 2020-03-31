const canvas = document.getElementById("canvas")! as HTMLCanvasElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
context.fillStyle = "black";
let mouse:Mouse;

class Mouse {
  constructor(public xMousePisition:number, public yMousePisition:number){}
}
mouse = new Mouse(0, 0)

window.addEventListener('mousemove', (event)=>{
  mouse = new Mouse(event.x, event.y)
})

class Utilities {
  static colorsArray: string[] = [
    'blue',
    'green',
    'red',
    'pink',
    'blue',
    'black'
  ]
}

class Circle {
  private radiusArc: number = 30;
  private maxRadiusArc: number = 100
  private fillColor: string = Utilities.colorsArray[Math.floor(Math.random() * Utilities.colorsArray.length)]
  constructor(
    private context:CanvasRenderingContext2D,
    private xPositionArc: number,
    private yPositionArc: number,
    private strokeStyle: string,
    private lineWidth: number,
    private xPositionArcVelocity: number,
    private yPositionArcVelocity: number
  ) {
    this.context.strokeStyle = this.strokeStyle;
    this.context.lineWidth = this.lineWidth;
  }
  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.fillColor
    this.context.arc(this.xPositionArc, this.yPositionArc, this.radiusArc, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill()
  }
  updateDraw() {
    if (
      this.xPositionArc + this.radiusArc >= canvas.width ||
      this.xPositionArc - this.radiusArc <= 0
    ) {
      this.xPositionArcVelocity = -this.xPositionArcVelocity;
    }
    if (
      this.yPositionArc + this.radiusArc >= canvas.height ||
      this.yPositionArc - this.radiusArc <= 0
    ) {
      this.yPositionArcVelocity = -this.yPositionArcVelocity;
    }
    if((mouse.xMousePisition - this.xPositionArc) > 10 ) {
      if (this.radiusArc < this.maxRadiusArc) {
        this.radiusArc += 1
      }
    } else if (this.radiusArc > 2){
      this.radiusArc -= 1
    }
    this.xPositionArc += this.xPositionArcVelocity;
    this.yPositionArc += this.yPositionArcVelocity;
    this.draw();
  }
}
const circleArray: Circle[] = [];
for (let index = 0; index < 25; index++) {
  const xPositionArc: number = Math.random() * canvas.width;
  const yPositionArc: number = Math.random() * canvas.height;
  const strokeStyle: string = "blue";
  const lineWidth: number = Math.random() * 50;
  const xPositionArcVelocity: number = Math.random() * 10;
  const yPositionArcVelocity: number = Math.random() * 10;
  circleArray.push(
    new Circle(
      context,
      xPositionArc,
      yPositionArc,
      strokeStyle,
      lineWidth,
      xPositionArcVelocity,
      yPositionArcVelocity
    )
  );
}
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  circleArray.forEach(circle => {
    circle.updateDraw();
  });
}

animate();
