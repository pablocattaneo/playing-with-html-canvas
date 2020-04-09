import Circle from "../src/Circle";
import DinamicCoordinates from "../src/DinamicCoordinates";

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
});

describe("Circle setCoordinatesLeftRightMouseEffect", () => {
  it("Verfication if setCoordinatesLeftRightMouseEffect is defined", () => {
    expect(circle.setCoordinatesLeftRightMouseEffect).toBeDefined();
  });
  it("User set setCoordinatesLeftRightMouseEffect width argument 5 and 10, so when redraw method is called must to call leftRightMouseEffect({ xPosition: 5, yPosition: 10 });", () => {
    const dinamicCoordinates: DinamicCoordinates = new DinamicCoordinates(
      5,
      10
    );
    circle.setCoordinatesLeftRightMouseEffect(dinamicCoordinates);
    const redrawMock = jest.spyOn(circle, "leftRightMouseEffect");
    circle.redraw(canvasEl);
    expect(redrawMock).toBeCalledWith({ xPosition: 5, yPosition: 10 });
  });
});
