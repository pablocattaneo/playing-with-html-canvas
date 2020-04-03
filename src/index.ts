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

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

class Utilities {
  static colorsArray: string[] = [
    'rgba(237, 188, 160, 1)',
    'rgba(157, 163, 164, 1)',
    'rgba(96, 77, 83, 1)',
    'rgba(219, 127, 142, 1)',
    'rgba(255, 219, 218, 1)',
  ]
}

class Circle {
  private radiusArc: number = 30;
  private maxRadiusArc: number = 70
  private fillColor: string = Utilities.colorsArray[Math.floor(Math.random() * Utilities.colorsArray.length)]
  constructor(
    private context:CanvasRenderingContext2D,
    private xCenterPositionArc: number,
    private yCenterPositionArc: number,
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
    this.context.arc(this.xCenterPositionArc, this.yCenterPositionArc, this.radiusArc, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill()
  }
  updateDraw() {
    if (
      this.xCenterPositionArc + this.radiusArc >= canvas.width ||
      this.xCenterPositionArc - this.radiusArc <= 0
    ) {
      this.xPositionArcVelocity = -this.xPositionArcVelocity;
    }
    if (
      this.yCenterPositionArc + this.radiusArc >= canvas.height ||
      this.yCenterPositionArc - this.radiusArc <= 0
    ) {
      this.yPositionArcVelocity = -this.yPositionArcVelocity;
    }
    if((mouse.xMousePisition - this.xCenterPositionArc) > 10 ) {
      if (this.radiusArc < this.maxRadiusArc) {
        this.radiusArc += 1
      }
    } else if (this.radiusArc > 5){
      this.radiusArc -= 1
    }
    this.xCenterPositionArc += this.xPositionArcVelocity;
    this.yCenterPositionArc += this.yPositionArcVelocity;
    this.draw();
  }
}
const circleArray: Circle[] = [];
for (let index = 0; index < 150; index++) {
  const xPositionArc: number = Math.random() * canvas.width;
  const yPositionArc: number = Math.random() * canvas.height;
  const strokeStyle: string = "black";
  const lineWidth: number = 1;
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
