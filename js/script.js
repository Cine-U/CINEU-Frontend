 /**Untuk Carousel */
 var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});   

/**untuk upcoming */
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

/**untuk starring */
const starring_arrows = document.querySelectorAll(".starring .arrow");
const starring_Lists = document.querySelectorAll(".starring-list");

starring_arrows.forEach((arrow, i) => {
  const itemNumber = starring_Lists [i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      starring_Lists [i].style.transform = `translateX(${
        starring_Lists [i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      starring_Lists [i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

// navbar
const mainNav = document.getElementByClass('main');

mainNav.onclick=e=>  // JS event delegation
  {
  if (e.target.tagName.toLowerCase() != 'a' ) return; // only
  e.preventDefault;
  let LI = e.target.parentElement;

  if (!LI.classList.contains('active'))
    {
    mainNav.querySelector('main').classList.remove('active');
    }
  LI.classList.add('active');
  }
