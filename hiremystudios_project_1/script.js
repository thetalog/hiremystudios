const productsShowCase = [
  {
    name: "cashew",
    linkSrc: "./assets/cashew.png",
    description:
      "We offer premium cashews that stand out for their exceptional quality and flavor. Grown on our well-tended farms, our cashews are hand-harvested and meticulously processed to ensure every nut is fresh, crunchy, and full of natural goodness. Whether you're looking to add a nutritious touch to your snacks or elevate your recipes, our cashews are the perfect choice. Experience the difference with Aura Farming's superior cashews, and taste the dedication we put into every harvest.",
  },
  {
    name: "almonds",
    linkSrc: "./assets/almonds.png",
    description:
      "We offer premium almonds that stand out for their superior quality and delightful taste. Grown on our carefully nurtured farms, our almonds are hand-picked and meticulously processed to ensure each nut is fresh, crunchy, and packed with natural goodness. Whether you're looking to enrich your snacks with wholesome nutrition or enhance your culinary creations, our almonds are the perfect choice. Experience the difference with Aura Farming's exceptional almonds, and savor the dedication we invest in every harvest.",
  },
];

const productsImageElement = document.querySelector(".products-img");
productsImageElement.setAttribute("src", productsShowCase[0]["linkSrc"]);
productsImageElement.setAttribute("alt", productsShowCase[0]["name"]);

const productsContentElement = document.querySelector(".products-content");
productsContentElement.textContent = productsShowCase[0]["description"];

const productsButtonElement = document.querySelector(".products-button");
let firstProductShowCount = 0;
const countProductsShow = () => {
  if (firstProductShowCount + 1 <= productsShowCase.length - 1) {
    return ++firstProductShowCount;
  } else {
    firstProductShowCount = 0;
    return 0;
  }
};

productsButtonElement.addEventListener("click", (event) => {
  const currentCounterProductsShow = countProductsShow();
  productsImageElement.setAttribute(
    "src",
    productsShowCase[currentCounterProductsShow]["linkSrc"]
  );
  productsImageElement.setAttribute(
    "alt",
    productsShowCase[currentCounterProductsShow]["name"]
  );
  productsContentElement.textContent =
    productsShowCase[currentCounterProductsShow]["description"];
});
