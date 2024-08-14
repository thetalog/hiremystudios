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
  {
    name: "pistachio",
    linkSrc: "./assets/pistachio.png",
    description:
      "Whether you're looking to enhance your cooking or enjoy a healthy treat, Aura Farming's pistachios deliver exceptional quality in every bite. Discover the difference our dedication makes and experience the unmatched flavor of our premium pistachios.",
  },
];

const productsImageElement = document.querySelector(".products-img");
productsImageElement.setAttribute("src", productsShowCase[0]["linkSrc"]);
productsImageElement.setAttribute("alt", productsShowCase[0]["name"]);

function capitalizeFirstLetter(string) {
  if (string.length === 0) return string; // Handle empty string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const productsTagNameElement = document.querySelector(".products-img-tag");
productsTagNameElement.textContent = capitalizeFirstLetter(
  productsShowCase[0]["name"]
);

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

const productsButtonBackgroundList = [
  "rgb(1, 61, 33)",
  "rgb(16, 108, 141)",
  "rgba(255,154,46,1)",
  "rgba(157,16,19,1)",
];
let productsButtonBackgroundListIndex = 0;
const getNextProductsButtonBackgroundListIndex = () => {
  productsButtonBackgroundListIndex =
    (productsButtonBackgroundListIndex + 1) %
    productsButtonBackgroundList.length;
  return productsButtonBackgroundListIndex;
};

const productsContainerGradientList = [
  "radial-gradient( circle, rgba(75, 143, 111, 1) 0%, rgba(53, 107, 92, 1) 87%, rgba(52, 103, 90, 1) 92%, rgba(52, 104, 79, 1) 100% )",
  "radial-gradient( circle, rgba(16, 139, 182, 1) 0%, rgba(0, 64, 87, 1) 100%, rgba(100, 64, 87, 1) 100%)",
  "radial-gradient(circle, rgba(213,199,5,1) 0%, rgba(255,195,96,1) 55%, rgba(255,154,46,1) 100%, rgba(52,50,0,1) 100%)",
  "radial-gradient(circle, rgba(185,12,12,1) 28%, rgba(157,16,19,1) 58%, rgba(122,0,14,1) 83%)",
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
  productsTagNameElement.textContent = capitalizeFirstLetter(
    productsShowCase[currentCounterProductsShow]["name"]
  );
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

// Subscription Section
const weeklyUpdatesList = [
  {
    updateDate: "August 14, 2024",
    updateHeading: "Harvesting Begins for the Cashew Season!",
    updateContent:
      "We’re excited to announce the start of our cashew harvest this week at Aura Farming. The trees are yielding a bountiful crop of high-quality cashews, and our team is busy hand-harvesting to ensure the best selection. Stay tuned for updates on the processing and quality checks!",
  },
  {
    updateDate: "August 21, 2024",
    updateHeading: "New Pistachio Varieties in the Orchard",
    updateContent:
      "This week, we planted new varieties of pistachios in our orchard. These varieties are known for their rich flavor and superior texture. We’re looking forward to watching them grow and will keep you updated on their progress. Our current pistachio crop continues to thrive, with excellent quality nuts being harvested.",
  },
  {
    updateDate: "August 28, 2024",
    updateHeading: "Hazelnut Processing and Quality Control",
    updateContent:
      "Our hazelnuts are now in the processing phase. We’ve implemented enhanced quality control measures to ensure each nut meets our high standards. After processing, the hazelnuts will be ready for packaging and distribution. We’re committed to delivering the freshest and most flavorful hazelnuts to our customers.",
  },
  {
    updateDate: "September 4, 2024",
    updateHeading: "Sustainable Farming Practices in Action",
    updateContent:
      "At Aura Farming, sustainability is a core value. This week, we’ve introduced new water-saving irrigation techniques and are using organic fertilizers to reduce our environmental impact. Our commitment to sustainable practices ensures that our nuts are not only high-quality but also grown in an eco-friendly manner.",
  },
  {
    updateDate: "September 11, 2024",
    updateHeading: "Preparing for Upcoming Nut Festival",
    updateContent:
      "We’re thrilled to announce our participation in the upcoming Nut Festival! Our booth will feature our finest cashews, pistachios, and hazelnuts. It’s a great opportunity for us to connect with our community and showcase the premium quality of our products. We hope to see you there!",
  },
];

const weeklyUpdatesContainerElement = document.querySelector(
  ".weekly-updates-container"
);

for (i of weeklyUpdatesList) {
  weeklyUpdatesContainerElement.innerHTML += `
    <div class="weekly-update-element">
      <h5 class="weekly-update-element-date">${i["updateDate"]}</h5>
      <h2 class="weekly-update-element-heading">${i["updateHeading"]}</h2>
      <p class="weekly-update-element-content">${i["updateContent"]}</p>
    </div>
  `;
}
