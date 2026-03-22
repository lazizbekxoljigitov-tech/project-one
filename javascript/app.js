const bars = document.querySelector("#bars__icon");
const menu = document.querySelector(".bars__main");
const audio = document.querySelector(".audio");
const playe = document.querySelector("#playe");
const pauses = document.querySelector("#pausee");
const cards = document.querySelector(".cards");
const davlatlar = [
  {
    id: 1,
    images: "./till/Uzbekistan.png",
    name: "O'zbekiston",
    subtitle:
      "Men O‘zbekistonda yashayman. Bu yerning tarixiy shaharlari va milliy taomlari juda ajoyib.",
  },
  {
    id: 2,
    images: "./till/az.webp",
    name: "Ozarbayjon",
    subtitle:
      "Men Ozarbayjonda bo‘lganman. Bu yerning madaniyati va Boku shahri menga juda yoqdi.",
  },
  {
    id: 3,
    images: "./till/fransya.png",
    name: "Fransiya",
    subtitle:
      "Men Fransiyaga borganman. Parij shahri va Eyfel minorasi menga juda yoqdi, juda chiroyli va romantik joy ekan.",
  },
  {
    id: 4,
    images: "./till/jp.webp",
    name: "Yaponiya",
    subtitle:
      "Men Yaponiyada bo‘lganman. Bu yerda texnologiya va an’analar uyg‘unlashgan.",
  },
  {
    id: 5,
    images: "./till/korea.webp",
    name: "Koreya",
    subtitle:
      "Men Koreyada bo‘lganman. Bu yerda texnologiya juda rivojlangan, odamlar esa juda tartibli.",
  },
  {
    id: 6,
    images: "./till/rus.png",
    name: "Rossiya",
    subtitle:
      "Men Rossiyaga borganman. Bu davlat juda katta va ob-havosi sovuq bo‘lishi bilan ajralib turadi.",
  },
  {
    id: 7,
    images: "./till/Turkya.webp",
    name: "Turkiya",
    subtitle:
      "Men Turkiyada bo‘lganman. Istanbul shahri va tarixiy joylari juda qiziqarli taassurot qoldirdi.",
  },
  {
    id: 8,
    images: "./till/us.webp",
    name: "AQSH",
    subtitle:
      "Men AQSHda bo‘lganman. Bu yerda zamonaviy shaharlar va katta imkoniyatlar mavjud.",
  },
];

const qzqsh = [
  {
    id: 1,
    image: "../games/anime.jpg",
    name: "Anime",
    subtitle:
      "Men anime ko'rishni juda yaxshi ko'raman. Yaponiya madaniyati va animatsiya san'ati meni hayratda qoldiradi, har bir epizod yangi his-tuyg'ular baxsh etadi.",
  },
  {
    id: 2,
    image: "../games/dramma.jpg",
    name: "Drama",
    subtitle:
      "Men drama seriallarini ko'p ko'raman. Koreya dramalari ayniqsa ajoyib, personajlarning hissiyotlari ekrandan o'tib ketadi.",
  },
  {
    id: 3,
    image: "./games/dunyoboylab.jpg",
    name: "Dunyo boylab",
    subtitle:
      "Dunyo mamlakatlarini ko'rib chiqishni orzu qilaman. Har bir mamlakat o'ziga xos madaniyati va go'zalligi bilan hayratlashtiradi.",
  },
  {
    id: 4,
    image: "./games/game.webp",
    name: "O'yin",
    subtitle:
      "Video o'yinlar mening sevimli hobbim. RPG va strategiya o'yinlari ayniqsa qiziqarli, har safar yangi sarguzashtlar kutadi.",
  },
  {
    id: 5,
    image: "./games/manga.png",
    name: "Manga",
    subtitle:
      "Men manga yaratish va anime qahramonlarini chizishni juda yaxshi ko'raman. Har bir chiziq orqali o'z his-tuyg'ularimni ifodalashga harakat qilaman.",
  },
  {
    id: 6,
    image: "./games/song.jpg",
    name: "Musiqa",
    subtitle:
      "Musiqa mening ruhumga oziq. K-pop va yapon musiqasini tinglash meni doim yaxshi kayfiyatga soladi.",
  },
  {
    id: 7,
    image: "./games/tillar.jpg",
    name: "Tillar",
    subtitle:
      "Xorijiy tillarni o'rganish menga juda qiziq. Yapon va koreys tillarini o'rganmoqdaman, bu esa yangi madaniyatlar eshigini ochib beradi.",
  },
  {
    id: 8,
    image: "./games/volebol.jpg",
    name: "Voleybol",
    subtitle:
      "Voleybol mening sevimli sportim. Do'stlar bilan o'ynash juda quvnoq, jamoaviy ruh va g'alaba hissi beqiyos.",
  },
];
const hobbbiCards = document.querySelector(".hobbi__cards");

function playew() {
  if ((playe.style.display = "none")) {
    audio.play();
    pauses.style.display = "inline";
  } else {
    audio.pause();
    playe.style.display = "inline";
  }
}

function pause() {
  if ((pauses.style.display = "none")) {
    audio.pause();
    playe.style.display = "inline";
  } else {
    audio.play();
    pauses.style.display = "inline";
  }
}

function menuAll() {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

davlatlar.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("cards__card");
  card.innerHTML = `
  <img src="${item.images}" alt="" class="card__img"/>
  <h1 class="card__title">${item.name}</h1>
  <p class="card__subtitle">${item.subtitle}</p>
  `;

  cards.appendChild(card);
});

qzqsh.forEach((item) => {
  let card = document.createElement("div");
  card.classList.add("hobbi__card");
  card.innerHTML = `
  <img src="${item.image}" alt="" class="card__img"/>
  <h1 class="card__title">${item.name}</h1>
  <p class="card__subtitle">${item.subtitle}</p>
  `;
  hobbbiCards.appendChild(card);
});

