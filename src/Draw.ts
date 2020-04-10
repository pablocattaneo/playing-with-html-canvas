import Circle from "./Circle";

export default class Draw {
  constructor(
    private context: CanvasRenderingContext2D,
    private circle: Circle,
    private fillColor: string | CanvasGradient | CanvasPattern = "black"
  ) {
    this.context.beginPath();
    this.context.fillStyle = this.fillColor;
    this.context.arc(
      this.circle.getXCenterPositionArc(),
      this.circle.getYCenterPositionArc(),
      this.circle.getRadiusArc(),
      0,
      2 * Math.PI
    );
  }
}
