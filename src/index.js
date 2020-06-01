import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.render(<App />, root);

const header = document.querySelector(".mainHeader");
const moniorHeight = window.innerHeight;
const app = document.querySelector(".App");

document.addEventListener("scroll", () => {
  let distanceFromTop = app.getBoundingClientRect().top;
  if (distanceFromTop < -136) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

///scrollTo script

const smoothScroll = (target, duration) => {
  const purpose = document.querySelector(target);
  let targetPosition = purpose.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};

const section1 = document.querySelector(".scroll");
const section2 = document.querySelector(".footerContainer");

section1.addEventListener("click", () => {
  smoothScroll(".footerContainer", 1000);
});
