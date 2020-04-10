import Circle from "./Circle";
import DinamicCoordinates from "./DinamicCoordinates";
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
  const xPositionArc: number = Math.random() * canvas.width;
  const yPositionArc: number = Math.random() * canvas.height;
  const strokeStyle: string = "black";
  const lineWidth: number = 1;
  const xPositionArcVelocity: number = Math.random() * 10;
  const yPositionArcVelocity: number = Math.random() * 10;
  const color = Utilities.colorsArray[
    Math.floor(Math.random() * Utilities.colorsArray.length)
  ];
  circleArray.push(
    new Circle(
      context,
      xPositionArc,
      yPositionArc,
      strokeStyle,
      lineWidth,
      xPositionArcVelocity,
      yPositionArcVelocity,
      color
    )
  );
}
console.log(circleArray)
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  circleArray.forEach((circle) => {
    if (
      (circle.getXCenterPositionArc() + circle.getRadiusArc()) >= canvas.width ||
      (circle.getXCenterPositionArc() - circle.getRadiusArc()) <= 0
    ) {
      circle.setXPositionArcVelocity( - circle.getxPositionArcVelocity())
    }
    if (
      circle.getYCenterPositionArc() + circle.getRadiusArc() >= canvas.height ||
      circle.getYCenterPositionArc() - circle.getRadiusArc() <= 0
    ) {
      circle.setYPositionArcVelocity( - circle.getyPositionArcVelocity())
    } 
    circle.setXCenterPositionArc(circle.getXCenterPositionArc() + circle.getxPositionArcVelocity())
    circle.setYCenterPositionArc(circle.getYCenterPositionArc() + circle.getyPositionArcVelocity())
    new Draw(context, circle, circle.getFillColor());
  });
}

animate();
