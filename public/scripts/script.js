let ballSmall = document.getElementsByClassName("ballSmall");
let ballLarge = document.getElementsByClassName("ballLarge");
let body = document.getElementById("body");

body.onmousemove = function (e) {
  var x = e.clientX;
  var y = e.clientY;
  for (const i of ballLarge) {
    i.style.marginTop =
      y +
      Math.floor(Math.random() * 300) -
      Math.floor(Math.random() * 300) +
      "px";
    i.style.marginLeft =
      x +
      Math.floor(Math.random() * 300) -
      Math.floor(Math.random() * 300) +
      "px";
    i.style.zIndex = Math.floor(Math.random() * 8);
  }
  for (const i of ballSmall) {
    i.style.marginLeft =
      x +
      Math.floor(Math.random() * 300) -
      Math.floor(Math.random() * 300) +
      "px";
    i.style.marginTop =
      y +
      Math.floor(Math.random() * 300) -
      Math.floor(Math.random() * 300) +
      "px";
    i.style.zIndex = Math.floor(Math.random() * 8);
  }
};
