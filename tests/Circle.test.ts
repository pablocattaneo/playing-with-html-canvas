import Circle from '../src/Circle';

describe('Circle', () => {
  it('Circle exist', () => {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('id', 'my-canvas')
    canvas.setAttribute('width', "400")
    canvas.setAttribute('height', "400")
    document.body.appendChild(canvas);
    const canvasEl = document.getElementById("my-canvas")! as HTMLCanvasElement;
    const context = canvasEl.getContext("2d") as CanvasRenderingContext2D;
    const circle = new Circle(context, 15, 15, 'black', 5, 5, 5);
    expect(circle).toBeInstanceOf(Circle)
  });
});