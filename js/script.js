// const array = [2, 23, 12, 32, 4, 8, 16, 18, 37];

// let arrSumm = array.reduce((prev, current) => prev + current);

// let arrMap = array.map((el) => el * 2);

// let arrFilter = array.filter(val => val % 2 == 0);

// let arrSort = array.sort((a,b)=>{
//     if (a<b) {
//         return -1
//     }
// })

const sek = document.querySelector(".s"), // sekundi strelkasiga ulandik
  min = document.querySelector(".m"), // minut strelkasiga ulandik
  hour = document.querySelector(".h"), // soat strelkasiga ulandik
  hourNum = document.querySelector(".hours"), // raqamli soatni soatiga ulandik
  minNum = document.querySelector(".minutes"); // raqamli soatni minutiga ulandik

// new Date() - global Object bu bizaga kompyutermizdagi vaqtni olib beradi
//   getSeconds() - bizga sekundni olib beradi
//   getMinutes() - bizga minutni olib beradi
//   getHours() - bizga soatni olib beradi
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function color() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  return `rgb(${r},${g},${b})`;
}
let time = new Date();
let fastSek = time.getSeconds() * 6;
function clock() {
  let time = new Date(),
    minut = time.getMinutes() * 6,
    hours = time.getHours() * 30;
  fastSek += 0.1;
  sek.style = `transform:rotate(${fastSek}deg)`;
  min.style = `transform:rotate(${minut}deg)`;
  hour.style = `transform:rotate(${hours}deg)`;
  setTimeout(() => {
    clock();
  }, 1000 / 60);

  hourNum.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minNum.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  hourNum.style = `color:${color()}; transition:1s;`;
  minNum.style = `color:${color()}; transition:1s;`;
}
clock();

const tabsItem = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", () => {
    for (let k = 0; k < tabsItem.length; k++) {
      tabsItem[k].classList.remove("active");
      tabs[k].classList.remove("active");
    }
    tabsItem[i].classList.add("active");
    tabs[i].classList.add("active");
  });
}

const btn = document.querySelector(".stopwatch__btn"),
  watchSek = document.querySelector(".stopwatch__seconds"),
  watchMin = document.querySelector(".stopwatch__minutes"),
  watchHour = document.querySelector(".stopwatch__hours"),
  span = document.querySelector(".tabsLink__span");

btn.addEventListener("click", () => {
  if (btn.innerHTML == "start") {
    btn.innerHTML = "stop";
    span.classList.add("active");
  } else if (btn.innerHTML == "stop") {
    btn.innerHTML = "clear";
    span.classList.remove("active");
    span.classList.add("active_clear");
  } else if (btn.innerHTML == "clear") {
    btn.innerHTML = "start";
    span.classList.remove("active_clear");
  }
});
function watch() {
  if (btn.innerHTML == "stop") {
    watchSek.innerHTML++;
    if (watchSek.innerHTML > 59) {
      watchSek.innerHTML = 0;
      watchMin.innerHTML++;
      if (watchMin.innerHTML > 59) {
        watchMin.innerHTML = 0;
        watchHour.innerHTML++;
      }
    }
  }
  if (btn.innerHTML == "start") {
    watchSek.innerHTML = 0;
    watchMin.innerHTML = 0;
    watchHour.innerHTML = 0;
  }
  setTimeout(() => {
    watch();
  }, 1000);
}
watch();
