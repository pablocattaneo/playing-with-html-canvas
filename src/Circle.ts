import DinamicCoordinates from "./DinamicCoordinates";

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
  private dinamicCoordinates: DinamicCoordinates = new DinamicCoordinates(0, 0);
  constructor(
    private context: CanvasRenderingContext2D,
    private xCenterPositionArc: number,
    private yCenterPositionArc: number,
    private strokeStyle: string,
    private lineWidth: number,
    private xPositionArcVelocity: number,
    private yPositionArcVelocity: number,
    private fillColor: string | CanvasGradient | CanvasPattern = "black",
    private radiusArc: number = 30,
    private maxRadiusArc: number = 70
  ) {
    this.context.strokeStyle = this.strokeStyle;
    this.context.lineWidth = this.lineWidth;
  }
  getXCenterPositionArc() {
    return this.xCenterPositionArc;
  }
  getYCenterPositionArc() {
    return this.yCenterPositionArc;
  }
  getxPositionArcVelocity() {
    return this.xPositionArcVelocity;
  }
  getyPositionArcVelocity() {
    return this.yPositionArcVelocity;
  }
  getRadiusArc() {
    return this.radiusArc;
  }
  getFillColor() {
    return this.fillColor;
  }
  getMaxRadiusArc() {
    return this.maxRadiusArc
  }
  setXCenterPositionArc(xCenterPositionArc: number) {
    this.xCenterPositionArc = xCenterPositionArc;
  }
  setYCenterPositionArc(yCenterPositionArc: number) {
    return (this.yCenterPositionArc = yCenterPositionArc);
  }
  setRadiusArc(setRadiusArc: number) {
    this.radiusArc = setRadiusArc;
  }
  setFillColor(color: string | CanvasGradient | CanvasPattern = "black") {
    this.fillColor = color;
  }
  setXPositionArcVelocity(setxPositionArcVelocity: number) {
    this.xPositionArcVelocity = setxPositionArcVelocity;
  }
  setYPositionArcVelocity(yPositionArcVelocity: number) {
    this.yPositionArcVelocity = yPositionArcVelocity;
  }
  setMaxRadiusArc(maxRadiusArc: number) {
    if(maxRadiusArc > 10){
      this.maxRadiusArc = maxRadiusArc
    } else {
      throw new Error('maxRadiusArc params must to be greater than 10');
    }
  }
}
