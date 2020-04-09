import Draw from "../src/Draw";

let canvasEl: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let draw: Draw;
beforeEach(() => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "my-canvas");
  canvas.setAttribute("width", "400");
  canvas.setAttribute("height", "400");
  document.body.appendChild(canvas);
  canvasEl = document.getElementById("my-canvas")! as HTMLCanvasElement;
  context = canvasEl.getContext("2d") as CanvasRenderingContext2D;
  draw = new Draw( context );
});

describe("Draw", () => {
  it("Developer use a Draw class, so should exist", () => {
    expect(draw).toBeInstanceOf(Draw);
  });
});
