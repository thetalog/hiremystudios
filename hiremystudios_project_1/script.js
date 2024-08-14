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
  {
    name: "hazelnuts",
    linkSrc: "./assets/hazelnuts.png",
    description:
      "Our hazelnuts are rich in flavor, boasting a buttery texture and a subtly sweet taste that enhances both sweet and savory dishes. Whether you're baking decadent desserts, making rich spreads, or enjoying them as a healthy snack, our hazelnuts provide a delightful crunch and nutritional benefits.",
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

const productsButtonBackgroundList = ["rgb(16, 108, 141)", "rgb(1, 61, 33)"];
let productsButtonBackgroundListIndex = 0;
const getNextProductsButtonBackgroundListIndex = () => {
  productsButtonBackgroundListIndex =
    (productsButtonBackgroundListIndex + 1) %
    productsButtonBackgroundList.length;
  return productsButtonBackgroundListIndex;
};

const productsContainerGradientList = [
  "radial-gradient( circle, rgba(16, 139, 182, 1) 0%, rgba(0, 64, 87, 1) 100% )",
  "radial-gradient( circle, rgba(75, 143, 111, 1) 0%, rgba(53, 107, 92, 1) 87%, rgba(52, 103, 90, 1) 92%, rgba(52, 104, 79, 1) 100% )",
];

const productsContainerElement = document.querySelector(".products-class");

productsContainerElement.style.background = productsContainerGradientList[0];
productsButtonElement.style.backgroundColor = productsButtonBackgroundList[0];
let productsGradientIndex = 0;
const getNextProductsGradientIndex = () => {
  productsGradientIndex =
    (productsGradientIndex + 1) % productsContainerGradientList.length;
  return productsGradientIndex;
};
productsContentElement.classList.add("text-focus-in");
productsButtonElement.addEventListener("click", (event) => {
  const currentCounterProductsShow = countProductsShow();
  productsButtonElement.style.backgroundColor =
    productsButtonBackgroundList[getNextProductsButtonBackgroundListIndex()];
  // Start the rotation animation
  productsImageElement.style.animation = "none";
  // Force a reflow to ensure the animation is reset
  productsImageElement.offsetHeight; // Trigger a reflow
  productsImageElement.style.animation = `productsRotateOnChange 1s forwards`;
  productsContainerElement.offsetHeight;
  productsContainerElement.style.background =
    productsContainerGradientList[getNextProductsGradientIndex()];
  // Change the image after the first rotation completes (5 seconds)
  productsImageElement.setAttribute(
    "src",
    productsShowCase[currentCounterProductsShow]["linkSrc"]
  );
  // Update alt text and description after the reverse animation completes (another 5 seconds)

  productsImageElement.setAttribute(
    "alt",
    productsShowCase[currentCounterProductsShow]["name"]
  );
  productsContentElement.classList.remove("text-focus-in");
  productsContentElement.offsetHeight; // Trigger a reflow
  productsContentElement.classList.add("text-focus-in");
  productsContentElement.textContent =
    productsShowCase[currentCounterProductsShow]["description"];
});

document.addEventListener("DOMContentLoaded", () => {
  const productBackgroundVideoSrc = [
    "./assets/video_1.mp4",
    "./assets/video_2.mp4",
    // "./assets/video_3.mp4",
  ];

  const backgroundVideoElement = document.querySelector("#background-video");
  const videoSourceElement = backgroundVideoElement.querySelector("source"); // Ensure this is defined

  let videoIndex = 0;
  const fadeDuration = 0.5; // Duration of the fade animation in seconds
  const fadeBeforeEnd = 5; // Number of seconds before the end to start fading out

  // Function to set the video source based on index
  const setVideoSource = (index) => {
    videoSourceElement.src = productBackgroundVideoSrc[index];
    backgroundVideoElement.load();
    backgroundVideoElement.play();
  };

  backgroundVideoElement.classList.add("zoom-animation");

  // Set the initial video source to the video at index 0
  setVideoSource(videoIndex);

  const getNextVideoIndex = () => {
    videoIndex = (videoIndex + 1) % productBackgroundVideoSrc.length;
    return videoIndex;
  };

  const fadeOut = () => {
    backgroundVideoElement.style.animation = `zoom 8s infinite alternate, fadeOut ${fadeDuration}s ease-in-out forwards`;
  };

  const fadeIn = () => {
    backgroundVideoElement.style.animation = `zoom 8s infinite alternate, fadeIn ${fadeDuration}s ease-in-out forwards`;
  };

  backgroundVideoElement.addEventListener("ended", () => {
    // Apply fade-out animation
    fadeOut();

    // Determine the next video source index
    const nextIndex = getNextVideoIndex();

    // Update the source element
    const nextSource = productBackgroundVideoSrc[nextIndex];
    videoSourceElement.src = nextSource;

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      // Reload and play the new video
      backgroundVideoElement.load();
      backgroundVideoElement.play();

      // Apply fade-in animation
      fadeIn();
    }, fadeDuration * 1000); // Convert duration to milliseconds
  });
});
