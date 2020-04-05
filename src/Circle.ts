import Mouse from "./Mouse";
let mouse: Mouse;

mouse = new Mouse(0, 0);

window.addEventListener("mousemove", (event) => {
  mouse = new Mouse(event.x, event.y);
});

class Utilities {
  static colorsArray: string[] = [
    "rgba(237, 188, 160, 1)",
    "rgba(157, 163, 164, 1)",
    "rgba(96, 77, 83, 1)",
    "rgba(219, 127, 142, 1)",
    "rgba(255, 219, 218, 1)",
  ];
}

export default class Circle {
  private radiusArc: number = 30;
  private maxRadiusArc: number = 70;
  private fillColor: string =
    Utilities.colorsArray[
      Math.floor(Math.random() * Utilities.colorsArray.length)
    ];
  constructor(
    private context: CanvasRenderingContext2D,
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
    this.context.fillStyle = this.fillColor;
    this.context.arc(
      this.xCenterPositionArc,
      this.yCenterPositionArc,
      this.radiusArc,
      0,
      2 * Math.PI
    );
    this.context.stroke();
    this.context.fill();
  }
  redraw(
    canvas: HTMLCanvasElement,
    coordinateMustKeepInsideCanvas: boolean = true
  ) {
    if (coordinateMustKeepInsideCanvas) {
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
    }
    this.leftRightMouseEffect(mouse, 10);
    this.xCenterPositionArc += this.xPositionArcVelocity;
    this.yCenterPositionArc += this.yPositionArcVelocity;
    this.draw();
  }
  leftRightMouseEffect(
    mouse: Mouse,
    distanceForGrowth: number = 10,
    growthVelocity: number = 1
  ) {
    if (mouse.xMousePisition - this.xCenterPositionArc >= distanceForGrowth) {
      if (this.radiusArc < this.maxRadiusArc) {
        this.radiusArc += growthVelocity;
      }
    } else if (this.radiusArc > 5) {
      this.radiusArc -=
        this.radiusArc - growthVelocity > 5 ? growthVelocity : 1;
    }
  }
}
