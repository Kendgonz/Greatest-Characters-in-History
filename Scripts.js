// const background = document.querySelector(".background");
// const loading = document.querySelector(".loading");

// let load = 0;

// let interval = setInterval(blurring, 30);

// function blurring() {
//   load++;
//   if (load > 99) {
//     clearInterval(interval);
//   }

//   loading.innerHTML = `${load}%`;
//   loading.style.opacity = scale(load, 0, 100, 1, 0);
//   background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// //This was TAKEN from StackOverflow
// function scale(number, inMin, inMax, outMin, outMax) {
//   return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
// }

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
