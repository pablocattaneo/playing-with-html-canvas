export default class Draw {
  constructor(
    private context: CanvasRenderingContext2D,
    private fillColor: string | CanvasGradient | CanvasPattern = 'black'
  ) {
    this.context.fillStyle = this.fillColor;
  }
}
