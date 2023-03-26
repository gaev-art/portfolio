import { TweenMax } from "gsap";

export const closestEdge = (x, y, w, h) => {
  let topEdgeDist = distMetric(x, y, w / 2, 0);
  let bottomEdgeDist = distMetric(x, y, w / 2, h);
  let leftEdgeDist = distMetric(x, y, 0, h / 2);
  let rightEdgeDist = distMetric(x, y, w, h / 2);
  let min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
  switch (min) {
    case leftEdgeDist:
      return "left";
    case rightEdgeDist:
      return "right";
    case topEdgeDist:
      return "top";
    case bottomEdgeDist:
      return "bottom";
    default:
  }
};

const distMetric = (x, y, x2, y2) => {
  let xDiff = x - x2;
  let yDiff = y - y2;
  return xDiff * xDiff + yDiff * yDiff;
};

export const startAnimation = () => {
  let boxes = document.querySelectorAll(".boxes");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onmouseenter = function (e) {
      let x = e.pageX - this.offsetLeft;
      let y = e.pageY - this.offsetTop;
      let edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      let overlay = this.childNodes[1];
      let image = this.childNodes[0];

      switch (edge) {
        case "left":
          overlay.style.top = "0%";
          overlay.style.left = "-100%";
          TweenMax.to(overlay, 0.5, { left: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "right":
          overlay.style.top = "0%";
          overlay.style.left = "100%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { left: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "top":
          overlay.style.top = "-100%";
          overlay.style.left = "0%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { top: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "bottom":
          overlay.style.top = "100%";
          overlay.style.left = "0%";
          //tween overlay from the right
          TweenMax.to(overlay, 0.5, { top: "0%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        default:
      }
    };

    boxes[i].onmouseleave = function (e) {
      let x = e.pageX - this.offsetLeft;
      let y = e.pageY - this.offsetTop;
      let edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
      let overlay = this.childNodes[1];
      let image = this.childNodes[0];

      switch (edge) {
        case "left":
          TweenMax.to(overlay, 0.5, { left: "-100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "right":
          TweenMax.to(overlay, 0.5, { left: "100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "top":
          TweenMax.to(overlay, 0.5, { top: "-100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        case "bottom":
          TweenMax.to(overlay, 0.5, { top: "100%" });
          TweenMax.to(image, 0.5, { scale: 1.0 });
          break;
        default:
      }
    };
  }
};
