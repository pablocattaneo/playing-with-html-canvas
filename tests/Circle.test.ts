import Circle from "../src/Circle";

let canvasEl: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let circle: Circle;
beforeEach(() => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "my-canvas");
  canvas.setAttribute("width", "400");
  canvas.setAttribute("height", "400");
  document.body.appendChild(canvas);
  canvasEl = document.getElementById("my-canvas")! as HTMLCanvasElement;
  context = canvasEl.getContext("2d") as CanvasRenderingContext2D;

  circle = new Circle(context, 15, 15, "black", 5, 5, 5);
});

describe("Circle", () => {
  it("Circle exist", () => {
    expect(circle).toBeInstanceOf(Circle);
  });
  it('Developer called getMaxRadiusArc width default value so value 70 must retun  ', () => {
    circle = new Circle(context, 15, 15, "black", 5, 5, 5);
    expect(circle.getMaxRadiusArc()).toBe(70)
  });
});
