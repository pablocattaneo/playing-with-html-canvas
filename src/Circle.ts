// Decorator Factory
function PositivesValues(index: number) {
  return function(target: any, key: string, propDesc: PropertyDescriptor) {
    let originalFunction: Function = propDesc.value;
    propDesc.value = function() {
      let argValue = arguments[index];
      let newArgs = [];
      for (let i = 0; i < arguments.length; i++) newArgs.push(arguments[i]);
      newArgs[index] = argValue || {};
      if (argValue < 10) {
        throw new Error(
          `${key} params numer ${index} must to be greater than 10`
        );
      }
      // this is the Class where the method is defined
      return originalFunction.apply(this, newArgs);
    };
    return propDesc;
  };
}

class Utilities {
  static colorsArray: string[] = [
    "rgba(237, 188, 160, 1)",
    "rgba(157, 163, 164, 1)",
    "rgba(96, 77, 83, 1)",
    "rgba(219, 127, 142, 1)",
    "rgba(255, 219, 218, 1)"
  ];
}

export default class Circle {
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
  @PositivesValues(0)
  @PositivesValues(1)
  bounce(widthBoundary: number, heightBoundary: number) {
    if (
      this.getXCenterPositionArc() + this.getRadiusArc() >= widthBoundary ||
      this.getXCenterPositionArc() - this.getRadiusArc() <= 0
    ) {
      this.setXPositionArcVelocity(-this.getxPositionArcVelocity());
    }
    if (
      this.getYCenterPositionArc() + this.getRadiusArc() >= heightBoundary ||
      this.getYCenterPositionArc() - this.getRadiusArc() <= 0
    ) {
      this.setYPositionArcVelocity(-this.getyPositionArcVelocity());
    }
    this.setXCenterPositionArc(
      this.getXCenterPositionArc() + this.getxPositionArcVelocity()
    );
    this.setYCenterPositionArc(
      this.getYCenterPositionArc() + this.getyPositionArcVelocity()
    );
  }
  gravity () {
    
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
    return this.maxRadiusArc;
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

  @PositivesValues(0)
  setMaxRadiusArc(maxRadiusArc: number) {
    this.maxRadiusArc = maxRadiusArc;
  }
}
