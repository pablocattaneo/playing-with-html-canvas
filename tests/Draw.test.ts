import Draw from "../src/Draw";

let canvasEl: HTMLCanvasElement;
let context: CanvasRenderingContext2D;
let draw: Draw;
let beginPath: object;
beforeEach(() => {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "my-canvas");
  canvas.setAttribute("width", "400");
  canvas.setAttribute("height", "400");
  document.body.appendChild(canvas);
  canvasEl = document.getElementById("my-canvas")! as HTMLCanvasElement;
  context = canvasEl.getContext("2d") as CanvasRenderingContext2D;
  draw = new Draw( context, 'red' );
  beginPath = jest.spyOn(context, "beginPath");
});

describe("Draw", () => {
  
  it("Developer use a Draw class, so should exist", () => {
    expect(draw).toBeInstanceOf(Draw);
  });

  it("Developer use a Draw class, so should const.beginPath method should be called", () => {
    expect(beginPath).toHaveBeenCalled()
  });

  it("Developer set property fillColor to red, so property value context.fillStyle have to be #f00", () => {
    expect(context.fillStyle).toMatch('#f00');
  });
  it("Developer set property fillColor to #008000, so property value context.fillStyle have to be #008000", () => {
    draw = new Draw( context, '#008000' );
    expect(context.fillStyle).toMatch('#008000');
  });
  it("Developer set NO property fillColor, so property value context.fillStyle have to be #000", () => {
    draw = new Draw( context );
    expect(context.fillStyle).toMatch('#000');
  });

  it("Developer set property fillColor to createLinearGradient(20,0, 220,0), so property value context.fillStyle have to be an instance of CanvasGradient", () => {
    draw = new Draw( context, context.createLinearGradient(20,0, 220,0) );
    expect(context.fillStyle).toBeInstanceOf(CanvasGradient);
  });

  it("Developer set property fillColor to createPattern(img, 'repeat'), so property value context.fillStyle have to be an instance of CanvasPattern", () => {
    const img = new Image();
    img.src = '../assets/images/canvas_createpattern.png';
    const pattern = context.createPattern(img, 'repeat') as CanvasPattern
    draw = new Draw( context, pattern);
    console.log(context.fillStyle)
    expect(context.fillStyle).toBeInstanceOf(CanvasPattern);
  });

});
