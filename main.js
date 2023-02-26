import {
  array,
  reviewsArr,
  secondReviewsArr,
  ingredientArray,
  safeAndEffectiveArray,
} from "./data.js";

const createPowerfullCard = (el) => {
  const powerfullCard = document.createElement("div");
  powerfullCard.classList.add("powerful-cards");
  const img = document.createElement("img");
  img.setAttribute("src", el.img);
  const hFour = document.createElement("h4");
  hFour.innerText = el.title;
  hFour.classList.add("c-green");

  const desc = document.createElement("p");
  desc.innerHTML = el.desc;
  desc.classList.add("desc");

  const secondDesc = document.createElement("p");
  secondDesc.innerHTML = el.secondDesc;
  secondDesc.classList.add("second-desc");
  secondDesc.style.display = el.secondDesc ? "block" : "none";

  const danger = document.createElement("p");
  danger.innerText = el.advertisment;
  danger.classList.add("danger");

  powerfullCard.append(img, hFour, desc, secondDesc, danger);
  return powerfullCard;
};
const cardWrapper = document.querySelector(".card-wrapper");

array.forEach((el) => {
  const card = createPowerfullCard(el);
  cardWrapper.append(card);
});

const createReview = (el, color) => {
  const { comment, name, rating } = el;
  const review = document.createElement("div");
  review.classList.add("review");
  review.setAttribute("style", `background-color: ${color}`);
  const firstName = name.split(" ")[0].slice(0, 1);
  const lastName = name.split(" ")[1].slice(0, 1);
  const fullName = firstName + "." + lastName + ".";
  const para = document.createElement("p");
  para.innerText = comment;

  const ratingDiv = document.createElement("div");
  ratingDiv.classList.add("rating");

  const span = document.createElement("span");
  span.classList.add("c-green");
  span.innerText = fullName;

  const stars = document.createElement("div");

  for (let i = 0; i < rating; i++) {
    const oneStar = document.createElement("img");
    oneStar.setAttribute("src", "/images/star.svg");
    oneStar.classList.add("align-self-center", "d-block");
    stars.append(oneStar);
  }

  const navodnici = document.createElement("img");
  navodnici.setAttribute("src", "/images/navodnici.svg");
  navodnici.classList.add("navodnici");

  ratingDiv.append(span, stars);
  review.append(navodnici, para, ratingDiv);
  return review;
};

const reviewList = document.querySelector("#reviews");

reviewsArr.forEach((el) => {
  const review = createReview(el, "white");
  reviewList.append(review);
});

const createIngredientCard = (el) => {
  const ingredientWrap = document.createElement("div");
  ingredientWrap.classList.add("ingredient");

  const boxOne = document.createElement("div");
  boxOne.classList.add("box-1");

  const hTwo = document.createElement("h2");
  hTwo.classList.add("c-green", "the-ingredient", "mb-15");
  hTwo.innerText = el.title;
  boxOne.append(hTwo);

  const firstDesc = document.createElement("p");
  firstDesc.classList.add("mb-15");
  firstDesc.innerText = el.descOne;
  boxOne.append(firstDesc);

  if (el.descTwo) {
    const descSecond = document.createElement("p");
    descSecond.classList.add("mb-15");
    descSecond.innerHTML = el.descTwo;

    boxOne.append(descSecond);
  }
  if (el.descThree) {
    const thirdDesc = document.createElement("p");
    thirdDesc.classList.add("mb-15");
    thirdDesc.innerHTML = el.descThree;

    boxOne.append(thirdDesc);
  }

  const UL = document.createElement("ul");
  UL.classList.add("list-style-none");

  if (el.list) {
    el.list.map((el) => {
      const li = document.createElement("li");
      li.innerHTML = el;
      UL.append(li);
    });
  }

  boxOne.append(UL);

  const boxTwo = document.createElement("div");
  boxTwo.classList.add("box-2");

  const img = document.createElement("img");
  img.classList.add("border-radius-15");
  img.setAttribute("src", el.img);
  boxTwo.append(img);

  ingredientWrap.append(boxOne, boxTwo);
  return ingredientWrap;
};

const ingredientsDiv = document.querySelector("#ingredients-div");
ingredientArray.forEach((el) => {
  ingredientsDiv.append(createIngredientCard(el));
});

const secondReviewsDiv = document.querySelector("#second-reviews");

secondReviewsArr.forEach((el) => {
  secondReviewsDiv.append(createReview(el, "#F1F0F5"));
});

const createSafeCard = (el) => {
  const { imgUrl, title, desc } = el;

  const safeInner = document.createElement("div");
  safeInner.classList.add("safe-inner");

  const img = document.createElement("img");
  img.classList.add("d-block", "center-margin", "mb-15");
  img.setAttribute("src", imgUrl);

  const theTittle = document.createElement("p");
  theTittle.classList.add("c-green", "text-center", "bigger", "mb-15");
  theTittle.innerText = title;

  const description = document.createElement("p");
  description.classList.add("text-center");
  description.innerText = desc;

  safeInner.append(img, theTittle, description);
  return safeInner;
};

const safeContainer = document.querySelector("#safe-effective-container");

safeAndEffectiveArray.forEach((el) => {
  safeContainer.append(createSafeCard(el));
});

const openClose = document.querySelectorAll(".accordion-element");

openClose.forEach((el, idx) => {
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
    openClose.forEach((el, index) => {
      if (idx !== index) {
        el.classList.remove("active");
      }
    });
  });
});

const buyNowBtns = document.querySelectorAll(".buy-now");


const everyBtnBuyNow = [...buyNowBtns];

const neededBuyNowBtn = everyBtnBuyNow.filter(
  (el) => el.childElementCount <= 1
);

neededBuyNowBtn.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    const sectionsNeeded = document.querySelectorAll("section.shop");
    const theSection = sectionsNeeded[index + 1];
    theSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
