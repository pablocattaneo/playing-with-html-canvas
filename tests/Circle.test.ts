import Circle from '../src/Circle';
import DinamicCoordinates from '../src/DinamicCoordinates';

let canvasEl: HTMLCanvasElement;
let context: CanvasRenderingContext2D;

beforeEach(() => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'my-canvas')
  canvas.setAttribute('width', "400")
  canvas.setAttribute('height', "400")
  document.body.appendChild(canvas);
  canvasEl = document.getElementById("my-canvas")! as HTMLCanvasElement;
  context = canvasEl.getContext("2d") as CanvasRenderingContext2D;
});

describe('Circle', () => {
  it('Circle exist', () => {
    const circle = new Circle(context, 15, 15, 'black', 5, 5, 5);
    expect(circle).toBeInstanceOf(Circle)
  });
});

describe('Circle setCoordinatesLeftRightMouseEffect', () => {
  it('setCoordinatesLeftRightMouseEffect is Definded', () => {
    const circle = new Circle(context, 15, 15, 'black', 5, 5, 5);
    expect(circle.setCoordinatesLeftRightMouseEffect).toBeDefined()
  });
});