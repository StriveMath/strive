import { Strive } from "./index";


// @ts-ignore
window.setup = () => {
  createCanvas(800, 800);
};
// @ts-ignore
window.draw = () => {
  background("black");
  stroke("white")
  Strive.translate(width/2, height/2)
  Strive.scale(1,-1)
  Strive.drawArrow(0,0,200,200)
  Strive.drawTickAxes();
  fill("white")
  Strive.text("Hello World", 100,100)
};
