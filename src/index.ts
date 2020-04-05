import Circle from "./Circle";
import Mouse from "./Mouse";

const canvas = document.getElementById("canvas")! as HTMLCanvasElement;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;
context.fillStyle = "black";

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const circleArray: Circle[] = [];
for (let index = 0; index < 150; index++) {
  const xPositionArc: number = Math.random() * canvas.width;
  const yPositionArc: number = Math.random() * canvas.height;
  const strokeStyle: string = "black";
  const lineWidth: number = 1;
  const xPositionArcVelocity: number = Math.random() * 10;
  const yPositionArcVelocity: number = Math.random() * 10;
  circleArray.push(
    new Circle(
      context,
      xPositionArc,
      yPositionArc,
      strokeStyle,
      lineWidth,
      xPositionArcVelocity,
      yPositionArcVelocity
    )
  );
}
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  circleArray.forEach((circle) => {
    circle.redraw(canvas);
  });
}

animate();
