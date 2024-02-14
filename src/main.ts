import gsap from "gsap";
import "./scripts/index";
import "./style.scss";
gsap.config({
  autoSleep: 60,
  force3D: !false,
});

const envelope = document.querySelector(".envelope") as HTMLDivElement;
const letter = document.querySelector(".letter") as HTMLDivElement;
const top = document.querySelector(".top") as HTMLDivElement;
const seal = document.querySelector(".seal") as HTMLDivElement;
const spans = letter.querySelectorAll("span");
const buttons = Array.from(
  document.querySelectorAll(".buttons  button")
) as HTMLButtonElement[];

gsap.set(buttons, {
  scaleY: 0,
});

gsap.set(envelope, {
  scale: 0,
});

gsap.to(envelope, {
  scale: 1,
  opacity: 1,
  duration: 2,
  ease: "bounce.out",
});

let tl = gsap
  .timeline({ paused: true })
  .to(seal, {
    scaleY: 0,
  })
  .to(top, {
    scaleY: 1,
    y: 0,
  })
  .set(top, {
    zIndex: -1,
  });

tl.to(letter, {
  y: "-120%",
  rotateX: "4deg",
})
  .set(letter, {
    zIndex: 9,
  })
  .to(letter, {
    y: -20,

    rotateX: 0,
  })
  .to(spans, {
    opacity: 1,
    stagger: 0.05,
  })
  .to(buttons, {
    scaleY: 1,
  });

tl.duration(6);

seal.addEventListener("click", () => {
  tl.play();
});

// tl.play();

// envelope.addEventListener("mouseover", () => {
//   tl.play();
// });

// envelope.addEventListener("mouseleave", () => {
//   tl.reverse();
// });
