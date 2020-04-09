import Draw from "../src/Draw";

let draw: Draw;
beforeEach(() => {
  draw = new Draw();
});

describe("Draw", () => {
  it("Developer use a Draw class, so should exist", () => {
    expect(draw).toBeInstanceOf(Draw);
  });
});
