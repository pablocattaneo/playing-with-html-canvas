export default class Draw {
  constructor(
    private context: CanvasRenderingContext2D,
    private fillColor: string = "black"
  ) {
    this.context.fillStyle = this.fillColor;
  }
}
