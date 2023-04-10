window.addEventListener("scroll", function () {
  if (scrollY > 0) {
    let header = document.getElementById("header").classList.add("scrlly");
  } else {
    let header = document.getElementById("header").classList.remove("scrlly");
  }
});

// ******************************************************************************************************************************

let num = 0;

function slidein() {
  let slidesho = document.getElementsByClassName("slidesho");
  slidesho[num].style.display = "block";
}
slidein();

back = () => {
  let slidesho = document.getElementsByClassName("slidesho");

  num = num - 1;

  if (num < 0) {
    num = slidesho.length - 1;
  }

  for (let div of slidesho) {
    div.style.display = "none";
  }

  slidesho[num].style.display = "block";
};

going = () => {
  let slidesho = document.getElementsByClassName("slidesho");

  num = num + 1;

  if (num > slidesho.length - 1) {
    num = 0;
  }

  for (let div of slidesho) {
    div.style.display = "none";
  }

  slidesho[num].style.display = "block";
};

setInterval(going, 3000);

// *****************************************************************************************************************************************

let moveup = document.getElementById("moveup");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    moveup.style.display = "block";
  } else {
    moveup.style.display = "none";
  }
});

moveup.addEventListener("click", function () {
  // window.scrollTo(0,0)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// ************************************************************************************************************************************
let signup = document.getElementById("signup");
signup.addEventListener("click", function () {
  let register = document.getElementById("register");
  register.style.visibility = "visible";
});

function firstcross() {
  register.style.visibility = "hidden";
}

let signin = document.getElementById("signin");
signin.addEventListener("click", function () {
  let entry = document.getElementById("entry");
  entry.style.visibility = "visible";
});

function secondcross() {
  entry.style.visibility = "hidden";
}

let signuppage = document.getElementById("signuppage");
let signinpage = document.getElementById("signinpage");
// *****************************************************************************

let hamburger = document.getElementById("hamburger");

// if (window.scrollY > 0) {
//     hamburger.style.display = "block"
// } else {
//     hamburger.style.display = "none"

// }

hamburger.addEventListener("click", function () {
  let pages = document.getElementById("pages");

  if (pages.style.transform != "translateX(-103%)") {
    pages.style.transform = "translateX(-103%)";
  } else {
    pages.style.transform = "translateX(-3%)";
  }
});
