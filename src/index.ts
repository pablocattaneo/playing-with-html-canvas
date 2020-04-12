import Circle from "./Circle";
import Draw from "./Draw";

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
context.fillStyle = "black";

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let mouseCoordinates: {
  mouseX: number;
  mouseY: number;
} = {
  mouseX: 0,
  mouseY: 0,
};
window.addEventListener("mousemove", (event) => {
  mouseCoordinates.mouseX = event.x;
  mouseCoordinates.mouseY = event.y;
});

class Utilities {
  static colorsArray: string[] = [
    "rgba(237, 188, 160, 1)",
    "rgba(157, 163, 164, 1)",
    "rgba(96, 77, 83, 1)",
    "rgba(219, 127, 142, 1)",
    "rgba(255, 219, 218, 1)",
  ];
}

const circleArray: Circle[] = [];
for (let index = 0; index < 150; index++) {
  const color =
    Utilities.colorsArray[
      Math.floor(Math.random() * Utilities.colorsArray.length)
    ];
  circleArray.push(
    new Circle(
      context,
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      "black",
      1,
      Math.random() * 10,
      Math.random() * 10,
      color
    )
  );
}
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  circleArray.forEach((circle) => {
    circle.bounce(canvas.width, canvas.height);
    if (mouseCoordinates.mouseX > circle.getXCenterPositionArc()) {
      if (circle.getRadiusArc() < circle.getMaxRadiusArc())
        circle.setRadiusArc(circle.getRadiusArc() + 1);
    } else {
      if (circle.getRadiusArc() > 30 )
        circle.setRadiusArc(circle.getRadiusArc() - 1);
    }
    new Draw(context, circle, circle.getFillColor());
  });
}

animate();
