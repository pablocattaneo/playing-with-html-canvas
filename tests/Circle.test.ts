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
  it('Developer called getMaxRadiusArc width default value so value 70 must retun when call getMaxRadiusArc ', () => {
    circle = new Circle(context, 15, 15, "black", 5, 5, 5);
    expect(circle.getMaxRadiusArc()).toBe(70)
  });
  it('Developer set to 90 the maxRadiusArc property so circle.getMaxRadiusArc() must to retuns 90', () => {
    circle = new Circle(context, 15, 15, "black", 5, 5, 5, 'red', 30, 90);
    expect(circle.getMaxRadiusArc()).toBe(90)
  });
  it('Developer set setMaxRadiusArc(80) so value 80 must retun when call getMaxRadiusArc  ', () => {
    circle.setMaxRadiusArc(80)
    expect(circle.getMaxRadiusArc()).toBe(80)
  });
  it('Developer set setMaxRadiusArc(9) so function have to thrown an error', () => {
    expect(() => {
      circle.setMaxRadiusArc(9)
    }).toThrow();
  });
  it('Developer set setMaxRadiusArc(-1) so function have to thrown an error', () => {
    expect(() => {
      circle.setMaxRadiusArc(-1)
    }).toThrow();
  });
  it('Bounce method shoul be defined in Circle', () => {
    expect(circle.bounce).toBeDefined()
  });
});
