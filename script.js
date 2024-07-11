let AddtoCartButton = document.querySelector(".Cartcircle");
let CartQuant = document.getElementById("CartQuantity");
let MovieButtons = document.querySelectorAll(".MovieCardButtons");
const CatalogPages = Array.from(document.querySelectorAll(".movieCont"));

const DeadpooleWolverine = {
  name: "Deadpool & Wolverine",
  date: "24 de julho",
  duration: "2h",
  time: "23:30",
  cover: "images/Wolverine-e-Deadpool.jpg",
};

const Maxxxine = {
  name: "Maxxxine",
  date: "17 de julho",
  duration: "2h",
  time: "19:30",
  cover: "images/maxxxine.jpg",
};


const Longlegs = {
  name: "Longlegs",
  date: "05 de julho",
  duration: "1h30m",
  time: "00:30",
  cover: "images/longlegs.jpg",
};



const TheMenFromKnoll = {
  name: "The Men From Knoll",
  date: "24 de julho",
  duration: "1h5m",
  time: "23:30",
  cover: "images/knoll.webp",
};

const Submarine = {
  name: "Submarine",
  date: "12 de julho",
  duration: "1h10m",
  time: "22:45",
  cover: "images/submarine.webp",
};

const CastleDoctrine = {
  name: "Castle Doctrine",
  date: "15 de julho",
  duration: "1h40m",
  time: "21:00",
  cover: "images/castle.webp",
};

const Cart = [];

const Catalog = [
  TheMenFromKnoll,
  Submarine,
  CastleDoctrine,
  DeadpooleWolverine,
  Longlegs,
  Maxxxine,
];

CartHas = 0;
CartQuant.innerHTML = CartHas;

function AddtoCart(n) {
  Cart.push(Catalog[n]);
  AddtoCartButton.classList.toggle("AddtoCart");
  CartQuant.innerHTML = Cart.length;
}

let MovieCard = document.querySelectorAll(".MovieInfo");
let MoviePoster = document.querySelectorAll(".MoviePoster");

for (let i = 0; i < MovieCard.length; i++) {

  let CardFrag = document.createDocumentFragment();
  let MovieName = document.createElement("p");
  let MovieDuration = document.createElement("p");
  let MovieTime = document.createElement("p");
  let LabelTime = document.createElement("h2");
  let LabelName = document.createElement("h2");
  let LabelDuration = document.createElement("h2");

  LabelName.innerHTML = "Nome: ";
  LabelDuration.innerHTML = "Duração: ";
  LabelTime.innerHTML = "Horário: ";
  MovieTime.innerHTML = Catalog[i].time;
  MovieDuration.innerHTML = Catalog[i].duration;
  MovieName.innerHTML = Catalog[i].name;

  CardFrag.appendChild(LabelName);
  CardFrag.appendChild(MovieName);
  CardFrag.appendChild(LabelDuration);
  CardFrag.appendChild(MovieDuration);
  CardFrag.appendChild(LabelTime);
  CardFrag.appendChild(MovieTime);

  MovieCard[i].appendChild(CardFrag);
  MoviePoster[i].setAttribute("src", Catalog[i].cover);
}

document.addEventListener("DOMContentLoaded", function (event) {
  // array with texts to type in typewriter
  var dataText = ["O SEU CINEMA", "O NOSSO CINEMA", "O CINEMA"];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector(".Mainbackground h1").innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
